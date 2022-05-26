package com.springdemo.hellow.services;

import java.util.Date;

import com.springdemo.hellow.model.ProblemImage;
import com.springdemo.hellow.requests.ProblemImageRequest;
import com.springdemo.hellow.repository.ProblemImageRepository;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class ProblemImageService {

    @Autowired
    ProblemImageRepository problemImageRepository;


    public ProblemImage create(ProblemImageRequest request) {
        request.setDate(new Date());
        return problemImageRepository.save(new ProblemImage(request));
    }
}
