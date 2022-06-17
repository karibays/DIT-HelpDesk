package com.springdemo.hellow.mapper.comment;

import com.springdemo.hellow.dto.comment.CommentCreateDto;
import com.springdemo.hellow.mapper.Mapper;
import com.springdemo.hellow.model.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CommentCreateMapper implements Mapper<CommentCreateDto, Comment> {

    public Comment mapProblem(CommentCreateDto object, Problem problem) {
        Comment comment = new Comment();
        copy(object, comment);
        comment.setProblem(problem);

        return comment;
    }

    @Override
    public Comment map(CommentCreateDto object) {
        Comment comment = new Comment();
        copy(object, comment);

        return comment;
    }

    @Override
    public Comment map(CommentCreateDto fromObject, Comment toObject) {
        copy(fromObject, toObject);
        return toObject;
    }

    private void copy(CommentCreateDto object, Comment comment){
        comment.setMessage(object.getMessage());
        comment.setUserId(object.getUserId());

    }

}
