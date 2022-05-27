package com.springdemo.hellow.repository;

import com.springdemo.hellow.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User getUserById(Long id);
    User getUsersByBarcode(int barcode);
}
