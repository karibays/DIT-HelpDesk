package com.springdemo.hellow.services;

import java.util.Date;
import java.util.List;

import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.model.User;
import com.springdemo.hellow.repository.UserRepository;
import com.springdemo.hellow.requests.ProblemRequest;
import com.springdemo.hellow.repository.ProblemRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class ProblemService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProblemRepository problemRepository;


    public Problem create(ProblemRequest request) {
        request.setDate(new Date());
        return problemRepository.save(new Problem(request));
    }

    public List<Problem> getProblemsByUserId(long id) {
        User user = userRepository.getUserById(id);
        return problemRepository.findProblemsByUser(user);
    }

    public void deleteProblem(Long postId) {
        problemRepository.deleteById(postId);
    }

    public void updateProblem(Problem inProblem) {
        Problem dbPost = problemRepository.getById(inProblem.getProblemId());
        if(dbPost != null) {
            dbPost.setDescription(inProblem.getDescription());
            dbPost.setTitle(inProblem.getTitle());
            problemRepository.save(dbPost);
            BeanUtils.copyProperties(dbPost, inProblem);
        }
    }

}
