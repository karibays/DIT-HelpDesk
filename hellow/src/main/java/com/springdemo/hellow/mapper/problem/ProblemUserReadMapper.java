package com.springdemo.hellow.mapper.problem;


import com.springdemo.hellow.dto.problem.ProblemUserReadDto;
import com.springdemo.hellow.mapper.Mapper;
import com.springdemo.hellow.model.User;
import org.springframework.stereotype.Component;

@Component
public class ProblemUserReadMapper implements Mapper<User, ProblemUserReadDto> {

    @Override
    public ProblemUserReadDto map(User object) {
        return new ProblemUserReadDto(
                object.getId(),
                object.getBarcode()
        );
    }
}
