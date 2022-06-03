package com.springdemo.hellow.dto.useradmin;

import com.springdemo.hellow.dto.category.CategoryReadDto;
import com.springdemo.hellow.dto.problem.ProblemUserReadDto;
import com.springdemo.hellow.dto.status.StatusReadDto;
import com.springdemo.hellow.model.enums.Role;
import lombok.Value;

import java.time.Instant;

@Value
public class AdminReadDto {

    Long barcode;
    String firstname;
    String lastname;
    String username;
    Role role;
}
