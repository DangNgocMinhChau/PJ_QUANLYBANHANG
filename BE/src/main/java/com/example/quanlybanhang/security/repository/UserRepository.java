package com.example.quanlybanhang.security.repository;

import com.example.quanlybanhang.security.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);

	Boolean existsBySdt(String sdt);

	Boolean existsByCmnd(String cmnd);

	User findUserByUsernameAndSdtAndCmndLike(String username, String sdt, String cmnd);


}
