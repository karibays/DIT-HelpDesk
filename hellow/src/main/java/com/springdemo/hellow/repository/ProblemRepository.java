package com.springdemo.hellow.repository;

import com.querydsl.core.types.Predicate;
import com.springdemo.hellow.model.Problem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ProblemRepository extends
        JpaRepository<Problem, Long>,
        FilterProblemRepository,
        QuerydslPredicateExecutor<Problem> {

//    List<Problem> findProblemsByUser(User user);

    @EntityGraph("Problem.category.status.user")
    Page<Problem> findAll(Predicate predicate, Pageable pageable);

    @EntityGraph("Problem.category.status.user")
    Optional<Problem> findById(Long id);

    @EntityGraph("Problem.category.status.user")
    @Query("select p " +
            "from Problem p" +
            " where p.user.id = :id")
    List<Problem> findByUserId(Long id);

    @EntityGraph("Problem.category.status.user")
    @Query("select p " +
            "from Problem p" +
            " where p.category.id = :id")
    List<Problem> findByCategoryId(Long id);
    @EntityGraph("Problem.category.status.user")
    @Query("select p " +
            "from Problem p" +
            " where p.status.id = :id")
    List<Problem> findByStatusId(Long id);
}
