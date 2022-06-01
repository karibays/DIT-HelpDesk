package com.springdemo.hellow.dto.problem;

import lombok.Builder;
import lombok.Getter;
import lombok.Value;
import lombok.experimental.FieldNameConstants;
import lombok.extern.jackson.Jacksonized;

@Value
@FieldNameConstants
@Getter
@Builder
@Jacksonized
public class ProblemEditDto {

    Long statusId;
}
