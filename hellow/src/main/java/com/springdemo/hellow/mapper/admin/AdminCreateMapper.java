package com.springdemo.hellow.mapper.admin;

import com.springdemo.hellow.dto.problem.ProblemCreateDto;
import com.springdemo.hellow.dto.useradmin.AdminCreateDto;
import com.springdemo.hellow.mapper.Mapper;
import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AdminCreateMapper implements Mapper<AdminCreateDto, User> {

    @Override
    public User map(AdminCreateDto object) {
        User user = new User();

        copy(object, user);

        return user;

    }

    @Override
    public User map(AdminCreateDto fromObject, User toObject) {
        copy(fromObject, toObject);
        return toObject;
    }

    private void copy(AdminCreateDto object, User user){

        user.setBarcode(object.getBarcode());
        user.setFirstname(object.getFirstname());
        user.setLastname(object.getLastname());
        user.setUsername(object.getUsername());
        user.setRole(object.getRole());
        user.setPassword(object.getPassword());

    }
}
