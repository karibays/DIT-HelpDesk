package com.springdemo.hellow.mapper;


import com.springdemo.hellow.dto.category.CategoryReadDto;
import com.springdemo.hellow.model.Category;
import org.springframework.stereotype.Component;

@Component
public class CategoryReadMapper implements Mapper<Category, CategoryReadDto> {

    @Override
    public CategoryReadDto map(Category object) {
        return new CategoryReadDto(
                object.getId(),
                object.getCategoryName()
        );
    }
}
