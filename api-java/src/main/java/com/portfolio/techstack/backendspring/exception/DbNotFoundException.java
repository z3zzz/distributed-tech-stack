package com.portfolio.techstack.backendspring.exception;

public class DbNotFoundException extends RuntimeException{
    public DbNotFoundException(String db) {
        super("Could not found db: " + db);
    }
}
