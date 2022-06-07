package com.springdemo.hellow.mapper.admin;

import com.springdemo.hellow.dto.problem.ProblemEditDto;
import com.springdemo.hellow.dto.useradmin.AdminEditDto;
import com.springdemo.hellow.mapper.Mapper;
import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.model.Status;
import com.springdemo.hellow.model.User;
import com.springdemo.hellow.repository.StatusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class AdminEditMapper implements Mapper<AdminEditDto, User> {

    @Override
    public User map(AdminEditDto object) {
        User user = new User();
        copy(object, user);

        return user;
    }

    @Override
    public User map(AdminEditDto fromObject, User toObject) {
        copy(fromObject, toObject);
        return toObject;
    }

    private void copy(AdminEditDto object, User user){
       user.setRole(object.getRole());
    }


}
