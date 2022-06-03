package com.springdemo.hellow.repository;

import com.springdemo.hellow.model.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProblemRepository extends
        JpaRepository<Problem, Long>,
        FilterProblemRepository,
        QuerydslPredicateExecutor<Problem> {

//    List<Problem> findProblemsByUser(User user);

    @Query("select p " +
            "from Problem p" +
            " where p.user.id = :id")
    List<Problem> findByUserId(Long id);

    @Query("select p " +
            "from Problem p" +
            " where p.category.id = :id")
    List<Problem> findByCategoryId(Long id);
    @Query("select p " +
            "from Problem p" +
            " where p.status.id = :id")
    List<Problem> findByStatusId(Long id);

}
