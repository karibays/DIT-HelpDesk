package com.springdemo.hellow.rest;


import com.springdemo.hellow.dto.PageResponse;
import com.springdemo.hellow.dto.filter.ProblemFilter;
import com.springdemo.hellow.dto.problem.ProblemCreateDto;
import com.springdemo.hellow.dto.problem.ProblemEditDto;
import com.springdemo.hellow.dto.problem.ProblemReadDto;
import com.springdemo.hellow.dto.useradmin.AdminCreateDto;
import com.springdemo.hellow.dto.useradmin.AdminReadDto;
import com.springdemo.hellow.services.ProblemService;
import com.springdemo.hellow.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/problems")
@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
@RequiredArgsConstructor
public class ProblemRestController {

    private final ProblemService problemService;
    private final UserService userService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public PageResponse<ProblemReadDto> findAll(ProblemFilter filter, Pageable pageable){
        Page<ProblemReadDto> page = problemService.findAll(filter, pageable);
        return PageResponse.of(page);
    }

    @GetMapping("/{id}")
    public ProblemReadDto findById(@PathVariable("id") Long id){
        return problemService.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("user/{id}")
    public List<ProblemReadDto> findByUser(@PathVariable("id") Long id){
        return problemService.findByUserId(id);
    }

    @GetMapping("category/{id}")
    public List<ProblemReadDto> findByCategory(@PathVariable("id") Long id){
        return problemService.findByCategoryId(id);
    }
    @GetMapping("status/{id}")
    public List<ProblemReadDto> findByStatus(@PathVariable("id") Long id){
        return problemService.findByStatusId(id);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ProblemReadDto create(@RequestBody ProblemCreateDto problem){
        return  problemService.create(problem);
    }

    @PutMapping("/{id}")
    public ProblemReadDto update(@PathVariable("id") Long id,
                                 @RequestBody ProblemEditDto problem){
        return problemService.update(id, problem)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") Long id){
        if (!problemService.delete(id)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


}