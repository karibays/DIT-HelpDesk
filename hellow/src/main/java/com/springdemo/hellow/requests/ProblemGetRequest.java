package com.springdemo.hellow.requests;

import com.fasterxml.jackson.core.JsonToken;
import com.springdemo.hellow.model.User;
import lombok.*;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProblemGetRequest {
    private Long user_id;
}
