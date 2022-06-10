package com.springdemo.hellow.services;

import com.springdemo.hellow.dto.comment.CommentCreateDto;
import com.springdemo.hellow.dto.comment.CommentReadDto;
import com.springdemo.hellow.mapper.comment.CommentCreateMapper;
import com.springdemo.hellow.mapper.comment.CommentReadMapper;
import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.repository.CommentRepository;
import com.springdemo.hellow.repository.ProblemRepository;
import com.springdemo.hellow.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final ProblemRepository problemRepository;
    private final UserRepository userRepository;
    private final CommentCreateMapper commentCreateMapper;
    private final CommentReadMapper commentReadMapper;

    public CommentReadDto saveComment(CommentCreateDto commentCreateDto,
                                         Long problemId) {
        Problem problems = problemRepository.findById(problemId)
                .orElseThrow();

       return problemRepository.findById(problemId)
               .map(dto ->
                       commentCreateMapper.mapProblem(commentCreateDto,dto))
               .map(commentRepository::save)
               .map(commentReadMapper::map)
               .orElseThrow();
    }

    public Stream<CommentReadDto> findCommentsByProblemId(Long problemId) {
        return commentRepository.findCommentsByProblem_Id(problemId).stream()
                .map(commentReadMapper::map);
    }


}
