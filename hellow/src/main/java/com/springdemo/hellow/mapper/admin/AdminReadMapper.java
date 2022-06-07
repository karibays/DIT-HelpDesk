package com.springdemo.hellow.mapper.admin;


import com.springdemo.hellow.dto.category.CategoryReadDto;
import com.springdemo.hellow.dto.problem.ProblemReadDto;
import com.springdemo.hellow.dto.problem.ProblemUserReadDto;
import com.springdemo.hellow.dto.status.StatusReadDto;
import com.springdemo.hellow.dto.useradmin.AdminReadDto;
import com.springdemo.hellow.mapper.CategoryReadMapper;
import com.springdemo.hellow.mapper.Mapper;
import com.springdemo.hellow.mapper.StatusReadMapper;
import com.springdemo.hellow.mapper.problem.ProblemUserReadMapper;
import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class AdminReadMapper implements Mapper<User, AdminReadDto> {

    @Override
    public AdminReadDto map(User object) {

        return new AdminReadDto(
                object.getId(),
                object.getFirstname(),
                object.getLastname(),
                object.getUsername(),
                object.getRole()
        );
    }
}

