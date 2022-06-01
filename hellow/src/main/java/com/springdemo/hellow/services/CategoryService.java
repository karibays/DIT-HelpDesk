package com.springdemo.hellow.services;

import com.springdemo.hellow.dto.category.CategoryReadDto;
import com.springdemo.hellow.mapper.CategoryReadMapper;
import com.springdemo.hellow.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryReadMapper categoryReadMapper;

    public Optional<CategoryReadDto> findById(Long id){
        return categoryRepository.findById(id)
                .map(categoryReadMapper::map);
    }

    public List<CategoryReadDto> findAll(){
        return categoryRepository.findAll().stream()
                .map(categoryReadMapper::map)
                .toList();
    }
}
