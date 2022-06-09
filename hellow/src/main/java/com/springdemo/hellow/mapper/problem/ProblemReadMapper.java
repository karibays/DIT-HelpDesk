package com.springdemo.hellow.mapper.problem;


import com.springdemo.hellow.dto.category.CategoryReadDto;
import com.springdemo.hellow.dto.problem.ProblemReadDto;
import com.springdemo.hellow.dto.problem.ProblemUserReadDto;
import com.springdemo.hellow.dto.status.StatusReadDto;
import com.springdemo.hellow.mapper.CategoryReadMapper;
import com.springdemo.hellow.mapper.Mapper;
import com.springdemo.hellow.mapper.StatusReadMapper;
import com.springdemo.hellow.model.Problem;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class ProblemReadMapper implements Mapper<Problem, ProblemReadDto> {

    private final CategoryReadMapper categoryReadMapper;
    private final StatusReadMapper statusReadMapper;
    private final ProblemUserReadMapper problemUserReadMapper;
    @Override
    public ProblemReadDto map(Problem object) {
        CategoryReadDto category = Optional.ofNullable(object.getCategory())
                .map(categoryReadMapper::map)
                .orElse(null);

        StatusReadDto status= Optional.ofNullable(object.getStatus())
                .map(statusReadMapper::map)
                .orElse(null);

        ProblemUserReadDto user = Optional.ofNullable(object.getUser())
                .map(problemUserReadMapper::map)
                .orElse(null);

        return new ProblemReadDto(
                object.getId(),
                object.getTitle(),
                object.getQuestion(),
                object.getAction(),
                object.getConsequences(),
                object.getCreatedAt(),
                status,
                category,
                user
        );
    }
}

