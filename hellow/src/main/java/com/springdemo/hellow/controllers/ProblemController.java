package com.springdemo.hellow.controllers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.springdemo.hellow.dto.barcode.UserIdDto;
import com.springdemo.hellow.model.SocketMessage;
import com.springdemo.hellow.model.User;
import com.springdemo.hellow.requests.UserRequest;
import com.springdemo.hellow.services.MessageService;
import com.springdemo.hellow.services.ProblemService;
import com.springdemo.hellow.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
@RequestMapping(value = "/problem")
@RequiredArgsConstructor
public class ProblemController {

    @Autowired
    private final UserService userService;
    @Autowired
    private final MessageService messageService;

    @PostMapping(value = "/get_user_id")
    public Optional<UserIdDto> get_user_id(UserRequest userRequest) {
        return userService.get_user_id(userRequest.getBarcode());
    }

    @GetMapping(value = "/get_messages/{problem_id}")
    public List<SocketMessage> getProblemsByID(@PathVariable("problem_id") long problem_id){
        return messageService.get_messages(problem_id);
    }
}