package com.springdemo.hellow.dto.comment;

import com.springdemo.hellow.dto.category.CategoryReadDto;
import com.springdemo.hellow.dto.problem.ProblemUserReadDto;
import com.springdemo.hellow.dto.status.StatusReadDto;
import lombok.Value;

import javax.validation.constraints.NotEmpty;
import java.time.Instant;
import java.time.LocalDateTime;

@Value
public class CommentReadDto {
    Long id;
    String message;
    Long userId;
    LocalDateTime createdDate;
}
