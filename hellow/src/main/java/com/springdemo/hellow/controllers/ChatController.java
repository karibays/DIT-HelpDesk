package com.springdemo.hellow.controllers;

import com.springdemo.hellow.model.SocketMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    public SocketMessage receiveMessage(@Payload SocketMessage message){
        return message;
    }

//    @MessageMapping("/private-message")
//    public SocketMessage recMessage(@Payload SocketMessage message){
//        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(),"/private",message);
//        System.out.println(message.toString());
//        return message;
//    }
}
