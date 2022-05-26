package com.springdemo.hellow.controllers;

import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.model.ProblemRequest;
import com.springdemo.hellow.services.ProblemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/create_problem")
public class ProblemController {
    @Autowired
    ProblemService problemService;

    @PostMapping
    public Problem create(@RequestBody ProblemRequest problem){
        return problemService.create(problem);
    }
}