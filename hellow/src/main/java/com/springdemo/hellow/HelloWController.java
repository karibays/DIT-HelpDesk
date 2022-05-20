package com.springdemo.hellow;

import com.springdemo.hellow.repository.ProblemRepository;
//import com.springdemo.hellow.repository.ProductRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping("/problem")
    public ResponseEntity getAll() {
        return ResponseEntity.ok(this.problemRepository.findById(1L));
    }
}
