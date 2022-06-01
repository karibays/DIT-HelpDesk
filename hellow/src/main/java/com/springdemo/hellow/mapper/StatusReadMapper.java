package com.springdemo.hellow.mapper;


import com.springdemo.hellow.dto.status.StatusReadDto;
import com.springdemo.hellow.model.Status;
import org.springframework.stereotype.Component;

@Component
public class StatusReadMapper implements Mapper<Status, StatusReadDto> {

    @Override
    public StatusReadDto map(Status object) {
        return new StatusReadDto(
                object.getId(),
                object.getStatusName()
        );
    }
}
