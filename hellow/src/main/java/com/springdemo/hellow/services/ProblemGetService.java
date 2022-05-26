package com.springdemo.hellow.services;

import java.util.List;

import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.repository.ProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class ProblemGetService {

    @Autowired
    private final ProblemRepository problemRepository;

    public ProblemGetService(ProblemRepository problemRepository) {
        this.problemRepository = problemRepository;
    }


    public List<Problem> get() {
        return problemRepository.findAll();
    }

    public static String asd(){
        return "asdasd";
    }
}
