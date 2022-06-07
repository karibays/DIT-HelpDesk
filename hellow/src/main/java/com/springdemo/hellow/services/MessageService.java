package com.springdemo.hellow.services;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import com.springdemo.hellow.model.SocketMessage;
import com.springdemo.hellow.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.jackson.Jacksonized;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;

    public List<SocketMessage> get_messages(long problem_id){
        return messageRepository.getAllByProblemId(problem_id);
    }
}
