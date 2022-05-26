package com.springdemo.hellow.requests;

import lombok.*;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProblemImageRequest {
    private byte[] image;
    private Date date;
}
