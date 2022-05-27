package com.springdemo.hellow.repository;

import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProblemRepository extends JpaRepository<Problem, Long> {

//    @Query("SELECT title FROM Problem title")
    List<Problem> findProblemsByUser(User user);



    //@Query("SELECT pg FROM User bk join bk.problems pg WHERE bk.userId = :userId")
    //List<Problem> findProblemsByUserId(@Param("userId") long userId);

    //@Query(value = "Select p from problems p where user_id = ?1")
    //List<Problem> getProblemsOfUser(long user_id);
}
