package com.portfolio.techstack.backendspring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendSpringApplication {

	public static void main(String[] args) {
    System.out.println(org.hibernate.Version.getVersionString());

		SpringApplication.run(BackendSpringApplication.class, args);
	}

}
