package com.springdemo.hellow.requests;

import com.fasterxml.jackson.core.JsonToken;
import com.springdemo.hellow.model.User;
import com.springdemo.hellow.repository.UserRepository;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

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

    @Autowired
    private UserRepository userRepository;

    public User getUser(){
        User user = new User(this.user_id);
        return user;
    }
}
