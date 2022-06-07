package com.springdemo.hellow.mapper;

import com.springdemo.hellow.dto.barcode.BarcodeUserDto;
import com.springdemo.hellow.model.User;
import org.springframework.stereotype.Component;

@Component
public class BarcodeUserMapper implements Mapper<User, BarcodeUserDto> {

    @Override
    public BarcodeUserDto map(User object) {
        return new BarcodeUserDto(
                object.getId()
        );
    }
}
