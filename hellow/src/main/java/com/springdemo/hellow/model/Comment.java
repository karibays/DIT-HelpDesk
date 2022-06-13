package com.springdemo.hellow.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    private Problem problem;
    private Long userId;
    private String message;
    private LocalDateTime createdDate;


    @PrePersist
    protected void onCreate(){
        this.createdDate = LocalDateTime.now();
    }
}
