package com.springdemo.hellow.repository;



import com.springdemo.hellow.dto.filter.ProblemFilter;
import com.springdemo.hellow.model.Problem;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FilterProblemRepository {

    List<Problem> findAllByFilter(ProblemFilter filter);
}
