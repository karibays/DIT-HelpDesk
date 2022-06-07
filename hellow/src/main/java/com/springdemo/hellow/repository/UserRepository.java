package com.springdemo.hellow.repository;

import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.model.User;
import com.springdemo.hellow.model.enums.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends
        JpaRepository<User, Long>,
        FilterProblemRepository,
        QuerydslPredicateExecutor<User> {
    User getUserById(Long id);
    User getUsersByBarcode(Long barcode);

    Optional<User> findByUsername(String username);
    Optional<User> findByBarcode(Long barcode);

    @Query("SELECT u " +
            "FROM User u " +
            "where u.role = 'USER' ")
    List<User> findRoleUser();

    @Query("SELECT u " +
            "FROM User u " +
            "where u.role = 'ADMIN' ")
    List<User> findRoleADMIN();

}
