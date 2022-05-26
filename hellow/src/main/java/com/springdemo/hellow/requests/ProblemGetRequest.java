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

    public User getUser(){
        User user = new User(this.user_id);
        System.out.println(user);
        return user;
    }

    public Long getUser_id(){
        return this.user_id;
    }
}
