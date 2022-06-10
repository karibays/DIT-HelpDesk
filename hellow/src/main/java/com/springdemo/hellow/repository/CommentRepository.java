package com.springdemo.hellow.repository;

import com.springdemo.hellow.dto.comment.CommentReadDto;
import com.springdemo.hellow.model.Comment;
import com.springdemo.hellow.model.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends
        JpaRepository<Comment, Long>{

    List<Comment> findCommentsByProblem_Id (Long problemId);

    Comment findByIdAndUserId(Long commentId, Long userId);

}
