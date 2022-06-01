package com.springdemo.hellow.repository;

import com.springdemo.hellow.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User getUserById(Long id);
    User getUsersByBarcode(int barcode);

    Optional<User> findByUsername(String username);
}
