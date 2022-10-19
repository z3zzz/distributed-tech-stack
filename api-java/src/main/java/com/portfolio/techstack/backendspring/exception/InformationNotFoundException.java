package com.portfolio.techstack.backendspring.exception;

public class InformationNotFoundException extends RuntimeException{
    public InformationNotFoundException(Long id) {
        super("Could not found information with the id: " + id);
    }
}
