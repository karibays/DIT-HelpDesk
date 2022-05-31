package com.springdemo.hellow.services;

import com.springdemo.hellow.model.User;
import com.springdemo.hellow.repository.UserRepository;
import com.springdemo.hellow.requests.ProblemRequest;
import com.springdemo.hellow.requests.UserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User get_user_id(int barcode){
        System.out.println(barcode);
        return userRepository.getUsersByBarcode(barcode);
    }


}

