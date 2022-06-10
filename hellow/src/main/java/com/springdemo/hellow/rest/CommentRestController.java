package com.springdemo.hellow.rest;

import com.springdemo.hellow.dto.comment.CommentCreateDto;
import com.springdemo.hellow.dto.comment.CommentReadDto;
import com.springdemo.hellow.mapper.comment.CommentMapper;
import com.springdemo.hellow.mapper.comment.CommentReadMapper;
import com.springdemo.hellow.repository.CommentRepository;
import com.springdemo.hellow.services.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.stream.Stream;

@RestController
@RequestMapping("/comment")
@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
@RequiredArgsConstructor
public class CommentRestController {

    private final CommentService commentService;
    private final CommentReadMapper commentReadMapper;
    private final CommentRepository commentRepository;

    private final CommentMapper commentMapper;


    @PostMapping("/{problemId}/create")
    public void createComment(@Valid @RequestBody CommentCreateDto commentCreateDto,
                              @PathVariable("problemId") Long problemId) {
        commentService.saveComment(commentCreateDto, problemId);
    }

    @GetMapping("/{problemId}/find")
    public Stream<CommentReadDto> findCommentsByProblemId(@PathVariable("problemId") Long problemId){
        return commentService.findCommentsByProblemId(problemId);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") Long id){
        if (!commentService.delete(id)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
