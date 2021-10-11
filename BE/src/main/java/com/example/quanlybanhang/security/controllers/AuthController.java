package com.example.quanlybanhang.security.controllers;

import com.example.quanlybanhang.controllers.mail.MailController;
import com.example.quanlybanhang.models.payload.request.LoginRequest;
import com.example.quanlybanhang.models.payload.request.SignupRequest;
import com.example.quanlybanhang.models.payload.response.ObjectRepones;
import com.example.quanlybanhang.security.models.ERole;
import com.example.quanlybanhang.security.models.Role;
import com.example.quanlybanhang.security.models.User;
import com.example.quanlybanhang.security.payload.response.JwtResponse;
import com.example.quanlybanhang.security.repository.RoleRepository;
import com.example.quanlybanhang.security.repository.UserRepository;
import com.example.quanlybanhang.security.security.jwt.JwtUtils;
import com.example.quanlybanhang.security.security.services.UserDetailsImpl;
import com.example.quanlybanhang.security.security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    MailController mailController;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtils.generateJwtToken(authentication);

            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            List<String> roles = userDetails.getAuthorities().stream()
                    .map(item -> item.getAuthority())
                    .collect(Collectors.toList());
            return ResponseEntity.ok(new JwtResponse(jwt,
                    userDetails.getId(),
                    userDetails.getUsername(),
                    userDetails.getEmail(),
                    userDetails.getSdt(),
                    userDetails.getMatKhauGoc(),
                    userDetails.getNgaySinh(),
                    userDetails.getGioiTinh(),
                    userDetails.getFacebook(),
                    userDetails.getImg(),
                    userDetails.getFullname(),
                    userDetails.getCmnd(),
                    roles));

        } catch (Exception e) {
            String msg = "Tài khoản hoặc mật khẩu không đúng !";
            return ResponseEntity.ok(msg);
        }
    }

    @GetMapping("/find/page")
    public Map<String, Object> getAllPage(@RequestParam(required = false) String searchString,
                                          @RequestParam(required = false) Integer pageSize,
                                          @RequestParam(required = false) Integer page,
                                          @RequestParam(required = false) String sortData
    ) {
        return userService.findAll(searchString, pageSize, page, sortData);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername()) || userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity.ok(new ObjectRepones(false, "Tài khoản hoặc email này đã được sử dụng!"));
        } else {

            // Create new user's account
            User user = new User(signUpRequest.getUsername(),
                    signUpRequest.getEmail(),
                    encoder.encode(signUpRequest.getPassword()),
                    signUpRequest.getSdt(),
                    signUpRequest.getMatKhauGoc(),
                    signUpRequest.getNgaySinh(),
                    signUpRequest.getGioiTinh(),
                    signUpRequest.getFacebook(),
                    signUpRequest.getImg(),
                    signUpRequest.getFullname(),
                    signUpRequest.getCmnd()
            );

            Set<String> strRoles = signUpRequest.getRole();
            Set<Role> roles = new HashSet<>();

            if (strRoles == null) {
                Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(userRole);
            } else {
                strRoles.forEach(role -> {
                    switch (role) {
                        case "ROLE_ADMIN":
                            Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                            roles.add(adminRole);

                            break;
                        case "ROLE_MODERATOR":
                            Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
                                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                            roles.add(modRole);

                            break;

                        case "ROLE_USER":
                            Role userRoles = roleRepository.findByName(ERole.ROLE_USER)
                                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                            roles.add(userRoles);

                            break;
                        default:
                            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                            roles.add(userRole);
                    }
                });
            }

            user.setRoles(roles);
            userRepository.save(user);

            return ResponseEntity.ok(new ObjectRepones(true, "Tạo tài khoản thành công !"));
        }
    }

    @PostMapping("/edit")
    public ResponseEntity<?> editUser(@RequestBody SignupRequest signUpRequest) {
        User userDetails = userRepository.findById(signUpRequest.getId()).orElse(null);
        userDetails.setUsername(signUpRequest.getUsername());
        userDetails.setEmail(signUpRequest.getEmail());
        userDetails.setFacebook(signUpRequest.getFacebook());
        userDetails.setGioiTinh(signUpRequest.getGioiTinh());
        userDetails.setImg(signUpRequest.getImg());
        userDetails.setNgaySinh(signUpRequest.getNgaySinh());
        userDetails.setSdt(signUpRequest.getSdt());
        userDetails.setFullname(signUpRequest.getFullname());
        userDetails.setCmnd(signUpRequest.getCmnd());

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "ROLE_ADMIN":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    case "ROLE_MODERATOR":
                        Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(modRole);

                        break;

                    case "ROLE_USER":
                        Role userRoles = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRoles);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        userDetails.setRoles(roles);
        userRepository.save(userDetails);

        return ResponseEntity.ok(new ObjectRepones(true, "Sửa tài khoản thành công!"));
    }

    @PostMapping("/changePass")
    public String editPass(@RequestBody SignupRequest signUpRequest) {
        User userDetails = userRepository.findById(signUpRequest.getId()).orElse(null);
        userDetails.setPassword(encoder.encode(signUpRequest.getPassword()));
        userRepository.save(userDetails);
        return ("Đổi mật khẩu thành công !");
    }

    @PostMapping("/resetPass")
    public ResponseEntity<?> resetPass(@RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername()) && userRepository.existsBySdt(signUpRequest.getSdt()) && userRepository.existsByCmnd(signUpRequest.getCmnd())) {
            User userDetails = userRepository.findUserByUsernameAndSdtAndCmndLike(signUpRequest.getUsername(), signUpRequest.getSdt(),signUpRequest.getCmnd());
            if (userDetails == null) {
                return ResponseEntity.ok(new ObjectRepones(false, "Thông tin bạn cung cấp không chính xác, Vui lòng kiểm tra lại!"));
            } else {
                userDetails.setPassword(encoder.encode("abc@123*"));
                userRepository.save(userDetails);
                try {
                    mailController.sendMailResetPass(userDetails.getEmail(), userDetails.getUsername(), "abc@123*",userDetails.getCmnd(),userDetails.getFullname());
                } catch (MessagingException e) {
                    e.printStackTrace();
                }
                return ResponseEntity.ok(new ObjectRepones(true, "Đã reset mật khẩu thành công, Vui lòng kiểm tra email!"));
            }
        } else {
            return ResponseEntity.ok(new ObjectRepones(false, "Thông tin bạn cung cấp không chính xác, Vui lòng kiểm tra lại!"));
        }
    }

    @PostMapping("/checkUserAndEmail")
    public String checkUser(@RequestBody SignupRequest signUpRequest) {
        String mes = "";
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            mes = ("Tài khoản đã tồn tại!");
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            mes = ("Email đã tồn tại!");
        }
        return mes;
    }

    @GetMapping(value = "/{id}")
    public Map<String, Object> getByUserId(@PathVariable Long id) {
        return userService.fetchById(id);
    }
}
