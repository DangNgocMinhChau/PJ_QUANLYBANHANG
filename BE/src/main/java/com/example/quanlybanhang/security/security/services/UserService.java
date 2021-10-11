package com.example.quanlybanhang.security.security.services;

import java.util.Map;

public interface UserService {
    public Map<String, Object> findAll(String searchString, Integer pageSize, Integer page, String sortData);
    public Map<String, Object> fetchById(Long id);
}
