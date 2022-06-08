package com.springdemo.hellow.dto.problem;

import lombok.Value;
import lombok.experimental.FieldNameConstants;

@Value
@FieldNameConstants
public class ProblemCreateDto {
    String title;
    String description;
    Long userId;
    Long categoryId;
}
