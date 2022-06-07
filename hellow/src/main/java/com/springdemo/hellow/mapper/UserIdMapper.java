package com.springdemo.hellow.mapper;

import com.springdemo.hellow.dto.barcode.BarcodeUserDto;
import com.springdemo.hellow.dto.barcode.UserIdDto;
import com.springdemo.hellow.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserIdMapper implements Mapper<User, UserIdDto> {

    @Override
    public UserIdDto map(User object) {
        return new UserIdDto(
                object.getId()
        );
    }
}
