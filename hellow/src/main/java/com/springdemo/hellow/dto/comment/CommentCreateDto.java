package com.springdemo.hellow.dto.comment;

import lombok.Value;
import lombok.experimental.FieldNameConstants;

import javax.validation.constraints.NotEmpty;

@Value
public class CommentCreateDto {
    @NotEmpty
    String message;
    Long userId;

}
