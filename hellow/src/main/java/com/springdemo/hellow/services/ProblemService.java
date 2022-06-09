package com.springdemo.hellow.services;

import com.querydsl.core.types.Predicate;
import com.springdemo.hellow.dto.filter.ProblemFilter;
import com.springdemo.hellow.dto.problem.ProblemCreateDto;
import com.springdemo.hellow.dto.problem.ProblemEditDto;
import com.springdemo.hellow.dto.problem.ProblemReadDto;
import com.springdemo.hellow.mapper.problem.ProblemCreateMapper;
import com.springdemo.hellow.mapper.problem.ProblemEditMapper;
import com.springdemo.hellow.mapper.problem.ProblemReadMapper;
import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.queryDsl.QPredicates;
import com.springdemo.hellow.repository.ProblemRepository;
import com.springdemo.hellow.repository.UserRepository;
import com.springdemo.hellow.requests.ProblemRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import static com.springdemo.hellow.model.QProblem.problem;

@Service
@RequiredArgsConstructor
public class ProblemService {

    private final UserRepository userRepository;
    private final ProblemRepository problemRepository;
    private final ProblemReadMapper problemReadMapper;
    private final ProblemCreateMapper problemCreateMapper;
    private final ProblemEditMapper problemEditMapper;

    //Rest Problem Controller

    public Page<ProblemReadDto> findAll(ProblemFilter filter, Pageable pageable){
        Predicate predicate = QPredicates.builder()
                .add(filter.title(), problem.title::containsIgnoreCase)
                .build();

        return problemRepository.findAll(predicate, pageable)
                .map(problemReadMapper::map);
    }

    public List<ProblemReadDto> findAll() {
        return problemRepository.findAll().stream()
                .map(problemReadMapper::map)
                .toList();
    }

    public Optional<ProblemReadDto> findById(Long id) {
        return problemRepository.findById(id)
                .map(problemReadMapper::map);
    }
    public List<ProblemReadDto> findByUserId(Long id) {
        return problemRepository.findByUserId(id).stream()
                .map(problemReadMapper::map)
                .toList();
    }
    public List<ProblemReadDto> findByCategoryId(Long id) {
        return problemRepository.findByCategoryId(id).stream()
                .map(problemReadMapper::map)
                .toList();
    }
    public List<ProblemReadDto> findByStatusId(Long id) {
        return problemRepository.findByStatusId(id).stream()
                .map(problemReadMapper::map)
                .toList();
    }
    @Transactional
    public ProblemReadDto create(ProblemCreateDto userDto) {
        return Optional.of(userDto)
                .map(dto ->
                        problemCreateMapper.map(dto)
                )
                .map(problemRepository::save)
                .map(problemReadMapper::map)
                .orElseThrow();
    }

    @Transactional
    public Optional<ProblemReadDto> update(Long id, ProblemEditDto problemDto) {
        return problemRepository.findById(id)
                .map(entity -> problemEditMapper.map(problemDto, entity))
                .map(problemRepository::saveAndFlush)
                .map(problemReadMapper::map);
    }

    @Transactional
    public boolean delete(Long id) {
        return problemRepository.findById(id)
                .map(entity -> {
                    problemRepository.delete(entity);
                    problemRepository.flush();
                    return true;
                })
                .orElse(false);
    }


    //Problem Controller

    public Problem create(ProblemRequest request) {
        request.setDate(new Date());
        return problemRepository.save(new Problem(request));
    }

//    public List<Problem> getProblemsByUserId(long id) {
//        User user = userRepository.getUserById(id);
//        return problemRepository.findProblemsByUser(user);
//    }

    public void deleteProblem(Long postId) {
        problemRepository.deleteById(postId);
    }

    public void updateProblem(Problem inProblem) {
        Problem dbPost = problemRepository.getById(inProblem.getId());
        if(dbPost != null) {
            dbPost.setDescription(inProblem.getDescription());
            dbPost.setTitle(inProblem.getTitle());
            problemRepository.save(dbPost);
            BeanUtils.copyProperties(dbPost, inProblem);
        }
    }


}
