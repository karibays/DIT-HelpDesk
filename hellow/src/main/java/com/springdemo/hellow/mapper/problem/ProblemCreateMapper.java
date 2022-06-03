package com.springdemo.hellow.mapper.problem;

import com.springdemo.hellow.dto.problem.ProblemCreateDto;
import com.springdemo.hellow.mapper.Mapper;
import com.springdemo.hellow.model.Category;
import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.model.User;
import com.springdemo.hellow.repository.CategoryRepository;
import com.springdemo.hellow.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class ProblemCreateMapper implements Mapper<ProblemCreateDto, Problem> {

    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;

    @Override
    public Problem map(ProblemCreateDto object) {
        Problem problem = new Problem();
        copy(object, problem);

        return problem;
    }

    public Problem mapWith(ProblemCreateDto object, User user){
        Problem problem = new Problem();
        copy(object, problem);
        problem.setUser(user);

        return problem;
    }

    @Override
    public Problem map(ProblemCreateDto fromObject, Problem toObject) {
        copy(fromObject, toObject);
        return toObject;
    }

    private void copy(ProblemCreateDto object, Problem problem){
        problem.setTitle(object.getTitle());
        problem.setDescription(object.getDescription());
        problem.setUser(getUser(object.getUserId()));
        problem.setCategory(getCategory(object.getCategoryId()));
    }

    public User getUser(Long userId) {
        return Optional.ofNullable(userId)
                .flatMap(userRepository::findById)
                .orElse(null);
    }

    public Category getCategory(Long categoryId) {
        return Optional.ofNullable(categoryId)
                .flatMap(categoryRepository::findById)
                .orElse(null);
    }
}