package com.springdemo.hellow.repository;


import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQuery;
import com.springdemo.hellow.dto.filter.ProblemFilter;
import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.queryDsl.QPredicates;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;
import java.util.List;


import static com.springdemo.hellow.model.QProblem.problem;

@RequiredArgsConstructor
public class FilterProblemRepositoryImpl implements FilterProblemRepository{

    private final EntityManager entityManager;

    @Override
    public List<Problem> findAllByFilter(ProblemFilter filter) {
        Predicate predicate = QPredicates.builder()
                .add(filter.title(), problem.title::containsIgnoreCase)
                .build();

        return new JPAQuery<Problem>(entityManager)
                .select(problem)
                .from(problem)
                .where(predicate)
                .fetch();
    }

}
