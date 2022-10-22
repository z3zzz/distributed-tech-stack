package com.portfolio.techstack.backendspring.exception;

public class InformationNotFoundException extends RuntimeException{
    public InformationNotFoundException(String title) {
        super("Could not found information with the title: " + title);
    }
}
