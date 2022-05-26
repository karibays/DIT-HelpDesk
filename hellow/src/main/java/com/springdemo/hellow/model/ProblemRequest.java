package com.springdemo.hellow.model;

import lombok.Data;
import java.util.Date;

@Data
public class ProblemRequest {
    private String title;
    private String description;
    private Date date;
}
