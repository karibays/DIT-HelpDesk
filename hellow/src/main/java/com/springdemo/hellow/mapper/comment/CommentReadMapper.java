package com.springdemo.hellow.mapper.comment;

import com.springdemo.hellow.dto.comment.CommentReadDto;
import com.springdemo.hellow.mapper.Mapper;
import com.springdemo.hellow.model.Comment;
import org.springframework.stereotype.Component;
@Component
public class CommentReadMapper implements Mapper<Comment, CommentReadDto> {

    @Override
    public CommentReadDto map(Comment object) {
        return new CommentReadDto(
                object.getId(),
                object.getMessage(),
                object.getUserId(),
                object.getCreatedDate()
        );
    }
}

