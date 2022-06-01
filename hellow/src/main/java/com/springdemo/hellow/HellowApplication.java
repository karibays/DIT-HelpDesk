package com.springdemo.hellow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class HellowApplication {

    public static void main(String[] args) {
        SpringApplication.run(HellowApplication.class, args);
    }

}
