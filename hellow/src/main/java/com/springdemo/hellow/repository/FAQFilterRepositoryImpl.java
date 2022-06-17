package com.springdemo.hellow.repository;

import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQuery;
import com.springdemo.hellow.dto.filter.FAQFilter;
import com.springdemo.hellow.dto.filter.ProblemFilter;
import com.springdemo.hellow.model.FAQ;
import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.model.QFAQ;
import com.springdemo.hellow.queryDsl.QPredicates;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;
import java.util.List;


import static com.springdemo.hellow.model.QFAQ.fAQ;
import static com.springdemo.hellow.model.QProblem.problem;

@RequiredArgsConstructor
public class FAQFilterRepositoryImpl implements FAQFilterRepository{

    private final EntityManager entityManager;

    @Override
    public List<FAQ> findAllByFilter(FAQFilter faqFilter) {
        Predicate predicate = QPredicates.builder()
                .add(faqFilter.problem(), fAQ.problem::containsIgnoreCase)
                .build();

        return new JPAQuery<FAQ>(entityManager)
                .select(fAQ)
                .from(fAQ)
                .where(predicate)
                .fetch();
    }

}
