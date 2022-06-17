package com.springdemo.hellow.controllers;

import com.springdemo.hellow.dto.PageResponse;
import com.springdemo.hellow.dto.barcode.UserIdDto;
import com.springdemo.hellow.dto.faq.FAQReadDto;
import com.springdemo.hellow.dto.filter.FAQFilter;
import com.springdemo.hellow.requests.UserRequest;
import com.springdemo.hellow.services.FAQService;
import com.springdemo.hellow.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://10.1.11.249:3000"},allowedHeaders = "*")
@RequestMapping(value = "/problem")
@RequiredArgsConstructor
public class ProblemController {

    @Autowired
    private final UserService userService;

    @Autowired
    private final FAQService faqService;

    @PostMapping(value = "/get_user_id")
    public Optional<UserIdDto> get_user_id(UserRequest userRequest) {
        return userService.get_user_id(userRequest.getBarcode());
    }

    @GetMapping(value = "/faq/{category_id}")
    public List<FAQReadDto> getByCategoryID(@PathVariable("category_id") long category_id){
        return faqService.findByCategoryId(category_id);
    }

    @GetMapping(value= "faqs")
    public List<FAQReadDto> findallFAQ(){
        return faqService.findAll();
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public PageResponse<FAQReadDto> findAll(FAQFilter faqFilter, Pageable pageable){
        Page<FAQReadDto> page = faqService.findAll(faqFilter, pageable);
        return PageResponse.of(page);
    }
}