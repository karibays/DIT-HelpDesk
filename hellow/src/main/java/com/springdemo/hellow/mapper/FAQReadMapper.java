package com.springdemo.hellow.mapper;

import com.springdemo.hellow.dto.faq.FAQReadDto;
import com.springdemo.hellow.model.FAQ;
import org.springframework.stereotype.Component;

@Component
public class FAQReadMapper implements Mapper<FAQ, FAQReadDto> {

    @Override
    public FAQReadDto map(FAQ faq) {
        return new FAQReadDto(
                faq.getProblem(),
                faq.getAnswer()
        );
    }
}