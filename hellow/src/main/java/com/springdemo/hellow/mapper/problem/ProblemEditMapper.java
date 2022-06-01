package com.springdemo.hellow.mapper.problem;


import com.springdemo.hellow.dto.problem.ProblemEditDto;
import com.springdemo.hellow.mapper.Mapper;
import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.model.Status;
import com.springdemo.hellow.repository.StatusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;


@Component
@RequiredArgsConstructor
public class ProblemEditMapper implements Mapper<ProblemEditDto, Problem> {

    private final StatusRepository statusRepository;

    @Override
    public Problem map(ProblemEditDto object) {
        Problem problem = new Problem();
        copy(object, problem);

        return problem;
    }

    @Override
    public Problem map(ProblemEditDto fromObject, Problem toObject) {
        copy(fromObject, toObject);
        return toObject;
    }

    private void copy(ProblemEditDto object, Problem problem){
        problem.setStatus(getStatus(object.getStatusId()));
    }

    public Status getStatus(Long statusId) {
        return Optional.ofNullable(statusId)
                .flatMap(statusRepository::findById)
                .orElse(null);
    }
}
