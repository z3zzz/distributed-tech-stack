package com.portfolio.techstack.backendspring.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class InformationNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(InformationNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> exceptionHandler(InformationNotFoundException exception) {
        Map<String, String> errorMap=new HashMap<>();
        errorMap.put("Not found!!", exception.getMessage());

        return errorMap;
    }
}
