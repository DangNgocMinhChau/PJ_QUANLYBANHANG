package com.example.quanlybanhang.security.security.services;

import com.example.quanlybanhang.common.PaginationDto;
import com.example.quanlybanhang.security.models.User;
import com.example.quanlybanhang.security.models.UserDto;
import com.example.quanlybanhang.security.repository.RoleRepository;
import com.example.quanlybanhang.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserDAO userDAO;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Override
    public Map<String, Object> findAll(String searchString, Integer pageSize, Integer page, String sortData) {
        Map<String, Object> mapResult = new HashMap<>();
        try {
            if (sortData == null) {
                sortData = "id DESC";
            }
            Pageable pageable = null;

            if (pageSize != null && page != null) {
                pageable = PageRequest.of(page - 1, pageSize);
                mapResult.put("pagination", new PaginationDto(page, pageSize, userDAO.countTaiKhoan(searchString)));
            }

            List<User> userList = userDAO.getListTaiKhoan(searchString, pageable, sortData);
            List<UserDto> userDtos = new ArrayList<UserDto>();
            for (User user : userList) {
                UserDto userDto = new UserDto();
                userDto.setId(user.getId());
                userDto.setUsername(user.getUsername());
                userDto.setEmail(user.getEmail());
                userDto.setPassword(user.getPassword());
                userDto.setSdt(user.getSdt());
                userDto.setMatKhauGoc(user.getMatKhauGoc());
                userDto.setNgaySinh(user.getNgaySinh());
                userDto.setGioiTinh(user.getGioiTinh());
                userDto.setFacebook(user.getFacebook());
                userDto.setImg(user.getImg());
                userDto.setFullname(user.getFullname());
                userDto.setCmnd(user.getCmnd());
                userDtos.add(userDto);
            }
            mapResult.put("result", userDtos);
            mapResult.put("status", true);
        } catch (Exception e) {
            e.printStackTrace();
            mapResult.put("result", null);
            mapResult.put("status", false);
            mapResult.put("msg", "Lấy danh sách thất bại");
        }
        return mapResult;
    }

    @Override
    public Map<String, Object> fetchById(Long id) {
        Map<String, Object> result = new HashMap<>();
        User userDetails = userRepository.findById(id).orElse(null);
        UserDto userDto = new UserDto();
        if(userDetails != null){
            List<String> roles = userDetails.getRoles().stream()
                    .map(item -> item.getName().name())
                    .collect(Collectors.toList());
            userDto.setId(userDetails.getId());
            userDto.setUsername(userDetails.getUsername());
            userDto.setEmail(userDetails.getEmail());
            userDto.setPassword(userDetails.getPassword());
            userDto.setSdt(userDetails.getSdt());
            userDto.setMatKhauGoc(userDetails.getMatKhauGoc());
            userDto.setNgaySinh(userDetails.getNgaySinh());
            userDto.setGioiTinh(userDetails.getGioiTinh());
            userDto.setFacebook(userDetails.getFacebook());
            userDto.setImg(userDetails.getImg());
            userDto.setFullname(userDetails.getFullname());
            userDto.setCmnd(userDetails.getCmnd());
            userDto.setRoles(roles);

            try{
                result.put("result", userDto);
                result.put("status", true);
                result.put("msg", "Lấy thành công !");
            }catch (Exception e){
                e.printStackTrace();
                result.put("result", null);
                result.put("status", false);
                result.put("msg", "Lấy thất bại !");
            }
        }else {
            result.put("result", null);
            result.put("status", false);
            result.put("msg", "Lấy thất bại !");
        }
        return result;
    }
}
