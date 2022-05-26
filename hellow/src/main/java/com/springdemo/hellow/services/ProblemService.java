package com.springdemo.hellow.services;

import java.util.Date;
import java.util.List;

import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.requests.ProblemRequest;
import com.springdemo.hellow.repository.ProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class ProblemService {

    @Autowired
    ProblemRepository problemRepository;


    public Problem create(ProblemRequest request) {
        request.setDate(new Date());
        return problemRepository.save(new Problem(request));
    }

    public List<Problem> get() {
        System.out.println(problemRepository.findAll());

        return problemRepository.findAll();
    }
}
