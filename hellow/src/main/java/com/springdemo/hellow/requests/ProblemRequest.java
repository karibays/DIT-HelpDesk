package com.springdemo.hellow.requests;

import com.fasterxml.jackson.core.JsonToken;
import com.springdemo.hellow.model.User;
import lombok.*;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class ProblemRequest {
    private String title;
    private String description;
    private Long user_id;
    private Date date;

    public User getUser(){
        User user = new User(this.user_id);
        System.out.println(user);
        return user;
    }
}
