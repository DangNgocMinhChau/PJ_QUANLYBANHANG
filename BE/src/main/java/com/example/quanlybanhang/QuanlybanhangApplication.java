package com.example.quanlybanhang;


import com.example.quanlybanhang.security.models.ERole;
import com.example.quanlybanhang.security.models.Role;
import com.example.quanlybanhang.security.models.User;
import com.example.quanlybanhang.security.repository.RoleRepository;
import com.example.quanlybanhang.security.repository.UserRepository;
//import com.example.quanlybanhang.services.uploadfile.FileStorageProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@SpringBootApplication
public class QuanlybanhangApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(QuanlybanhangApplication.class, args);
    }


    @Autowired
    RoleRepository roleRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Override
    public void run(String... args) throws Exception {
        List<Role> list = roleRepository.findAll();
        if(list.isEmpty()){
            Role role = new Role();
            role.setName(ERole.ROLE_USER);
            roleRepository.save(role);

            Role role1 = new Role();
            role1.setName(ERole.ROLE_ADMIN);
            roleRepository.save(role1);


            Role role2 = new Role();
            role2.setName(ERole.ROLE_MODERATOR);
            roleRepository.save(role2);
        }

        List<User> userList = userRepository.findAll();
        if(userList.isEmpty()){
            Set<Role> roles = new HashSet<>();
            Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(adminRole);

            User user = new User();
            user.setUsername("admin");
            user.setEmail("chaudang1595@gmail.com");
            user.setFacebook("adminfb");
            user.setGioiTinh("Nam");
            user.setImg("");
            user.setMatKhauGoc("admin@123");
            user.setNgaySinh("1995-05-15T14:07:32.668Z");
            user.setSdt("0905315214");
            user.setFullname("Đặng Ngọc Minh Châu");
            user.setCmnd("201727226");
            user.setPassword(encoder.encode("admin@123"));
            user.setRoles(roles);
            userRepository.save(user);
        }
    }
}
