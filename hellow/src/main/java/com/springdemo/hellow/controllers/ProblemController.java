package com.springdemo.hellow.controllers;

import com.springdemo.hellow.dto.barcode.UserIdDto;
import com.springdemo.hellow.requests.UserRequest;
import com.springdemo.hellow.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
@RequestMapping(value = "/problem")
@RequiredArgsConstructor
public class ProblemController {

    @Autowired
    private final UserService userService;

    @PostMapping(value = "/get_user_id")
    public Optional<UserIdDto> get_user_id(UserRequest userRequest) {
        return userService.get_user_id(userRequest.getBarcode());
    }


}