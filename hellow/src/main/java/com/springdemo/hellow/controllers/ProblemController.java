package com.springdemo.hellow.controllers;

import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.requests.ProblemRequest;
import com.springdemo.hellow.services.ProblemGetService;
import com.springdemo.hellow.services.ProblemImageService;
import com.springdemo.hellow.services.ProblemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/problem")
public class ProblemController {
    @Autowired
    ProblemService problemService;
    ProblemImageService problemImageService;
    private final ProblemGetService problemGetService;

    public ProblemController(ProblemGetService problemGetService) {
        this.problemGetService = problemGetService;
    }


    @PostMapping(value = "/create" )
    public void create(ProblemRequest problem){
        problemService.create(problem);
    }

    @GetMapping(value = "/get_all")
    public ResponseEntity get_all(ProblemRequest problemRequest){
        /*System.out.println(this.problemRepository.findAll());
        return ResponseEntity.ok(this.problemRepository.findAll());*/
        List<Problem> problem = problemService.get();
        return ResponseEntity.ok(problem);
    }
}