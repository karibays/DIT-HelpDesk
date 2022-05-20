package com.springdemo.hellow;

import com.springdemo.hellow.repository.ProductRepository;
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
    private final ProductRepository productRepository;

    public HelloWController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/product")
    public ResponseEntity getAllProducts() {
        return ResponseEntity.ok(this.productRepository.findAll());
    }
}
