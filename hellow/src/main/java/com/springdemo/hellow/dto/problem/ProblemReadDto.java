package com.springdemo.hellow.dto.problem;

import com.springdemo.hellow.dto.category.CategoryReadDto;
import com.springdemo.hellow.dto.status.StatusReadDto;
import lombok.Value;

import java.time.Instant;
import java.time.LocalDate;

@Value
public class ProblemReadDto {

    Long id;
    String title;
    String description;
    Instant createdAt;
    StatusReadDto status;
    CategoryReadDto category;
    ProblemUserReadDto user;
    Long a = 5L;
}
