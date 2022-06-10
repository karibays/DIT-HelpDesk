package com.springdemo.hellow.repository;

import com.springdemo.hellow.model.FAQ;
import com.springdemo.hellow.model.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface FAQRepository extends JpaRepository<FAQ, Long>,
        FAQFilterRepository,
        QuerydslPredicateExecutor<FAQ> {
    @Query("select p " +
            "from FAQ p" +
            " where p.category.id = :id")
    List<FAQ> findByCategoryId(Long id);
}

