package com.springdemo.hellow.services;

import java.util.Date;

import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.model.ProblemRequest;
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
}
