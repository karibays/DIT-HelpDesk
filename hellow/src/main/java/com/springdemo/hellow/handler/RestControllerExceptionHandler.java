package com.springdemo.hellow.handler;

import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice(basePackages = "com.springdemo.hellow.rest")
public class RestControllerExceptionHandler extends ResponseEntityExceptionHandler {

}
