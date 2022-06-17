package com.springdemo.hellow.mapper.comment;

import com.springdemo.hellow.dto.comment.CommentDTO;
import com.springdemo.hellow.model.Comment;
import org.aspectj.lang.annotation.control.CodeGenerationHint;
import org.springframework.stereotype.Component;

@Component
public class CommentMapper {

    public CommentDTO commentToCommentDTO(Comment comment) {
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setId(comment.getId());
        commentDTO.setMessage(comment.getMessage());

        return commentDTO;
    }
}
