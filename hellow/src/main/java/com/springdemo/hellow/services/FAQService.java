package com.springdemo.hellow.services;

import com.querydsl.core.types.Predicate;
import com.springdemo.hellow.dto.category.CategoryReadDto;
import com.springdemo.hellow.dto.faq.FAQReadDto;
import com.springdemo.hellow.dto.filter.FAQFilter;
import com.springdemo.hellow.dto.filter.ProblemFilter;
import com.springdemo.hellow.dto.problem.ProblemReadDto;
import com.springdemo.hellow.mapper.CategoryReadMapper;
import com.springdemo.hellow.mapper.FAQReadMapper;
import com.springdemo.hellow.model.FAQ;
import com.springdemo.hellow.queryDsl.QPredicates;
import com.springdemo.hellow.repository.CategoryRepository;
import com.springdemo.hellow.repository.FAQRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static com.springdemo.hellow.model.QFAQ.fAQ;
import static com.springdemo.hellow.model.QProblem.problem;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class FAQService {

    private final FAQRepository faqRepository;
    private final FAQReadMapper faqReadMapper;

    public List<FAQReadDto> findByCategoryId(Long category_id){
        return faqRepository.findByCategoryId(category_id).stream()
                .map(faqReadMapper::map)
                .toList();
    }

    public List<FAQReadDto> findAll(){
        return faqRepository.findAll().stream()
                .map(faqReadMapper::map)
                .toList();
    }

    public Page<FAQReadDto> findAll(FAQFilter faqFilter, Pageable pageable){
        Predicate predicate = QPredicates.builder()
                .add(faqFilter.problem(), fAQ.problem::containsIgnoreCase)
                .build();

        return faqRepository.findAll(predicate, pageable)
                .map(faqReadMapper::map);
    }
}