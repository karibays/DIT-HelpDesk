package com.springdemo.hellow.dto.useradmin;

import com.springdemo.hellow.model.enums.Role;
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

public class AdminEditDto {
    Role role;
}
