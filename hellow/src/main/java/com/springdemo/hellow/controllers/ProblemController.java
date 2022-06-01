package com.springdemo.hellow.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.model.User;

import com.springdemo.hellow.requests.ProblemRequest;
import com.springdemo.hellow.requests.UserRequest;
import com.springdemo.hellow.services.ProblemService;
import com.springdemo.hellow.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
@RequestMapping(value = "/problem")
@RequiredArgsConstructor
public class ProblemController {

    private final ProblemService problemService;
    private final UserService userService;

    @PostMapping(value = "/get_user_id")
    public User get_user_id(UserRequest userRequest) {
        return userService.get_user_id(userRequest.getBarcode());
    }

}