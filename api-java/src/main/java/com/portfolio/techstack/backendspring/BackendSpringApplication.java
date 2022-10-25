package com.portfolio.techstack.backendspring;

import com.portfolio.techstack.backendspring.repository.InformationMongodbRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableMongoRepositories
@ComponentScan({"com.portfolio.techstack.backendspring.repository"})
public class BackendSpringApplication {

    @Autowired
    InformationMongodbRepository informationMongodbRepository;

	public static void main(String[] args) {
    System.out.println(org.hibernate.Version.getVersionString());

		SpringApplication.run(BackendSpringApplication.class, args);
	}

  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
          String env = System.getenv("JAVA_ENV");

          if (env.equals("development")) 
            registry.addMapping("/**")
                    .allowedOrigins("http://localhost:5173", "http://localhost:3000")
                    .allowedMethods("GET", "POST", "PUT", "DELETE");

      }
    };
  }

}
