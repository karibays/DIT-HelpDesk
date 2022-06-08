package com.springdemo.hellow.dto.barcode;

import com.springdemo.hellow.model.enums.Role;
import lombok.Value;

@Value
public class UserIdDto {
    Long id;
    Role role;
}
