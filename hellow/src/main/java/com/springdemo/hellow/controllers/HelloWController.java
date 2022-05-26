package com.springdemo.hellow.controllers;

import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.repository.ProblemRepository;
//import com.springdemo.hellow.repository.ProductRepository;
import com.springdemo.hellow.services.ProblemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class HelloWController {
    @RequestMapping
    public String helloWorld(){
        return "Hello World From Spring Boot";
    }
    @RequestMapping("/goodbye")
    public String goodbye() {
        return "Goodbye from Spring Boot";
    }
    //private final ProductRepository productRepository;
    private final ProblemRepository problemRepository;

    public HelloWController(ProblemRepository problemRepository) {
        //this.productRepository = productRepository;
        this.problemRepository = problemRepository;
    }

    /*@GetMapping("/product")
    public ResponseEntity getAllProducts() {
        return ResponseEntity.ok(this.productRepository.findAll());
    }*/


}
