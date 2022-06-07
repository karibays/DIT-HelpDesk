package com.springdemo.hellow.dto.problem;

import lombok.Value;
import lombok.experimental.FieldNameConstants;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Column;
import java.time.LocalDate;

@Value
@FieldNameConstants
public class ProblemCreateDto {
    String title;
    String description;
    Long userId;
    Long categoryId;
    Long statusId =1L;
}
