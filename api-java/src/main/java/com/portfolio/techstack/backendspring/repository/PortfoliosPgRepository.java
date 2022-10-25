package com.portfolio.techstack.backendspring.repository;

import com.portfolio.techstack.backendspring.model.Portfolios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface PortfoliosPgRepository extends JpaRepository<Portfolios, Long> {
  //@Query(
  //value = "SELECT id, content, title, github_link AS \"githubLink\", tech_stack AS \"techStack\" FROM portfolios;", 
  //value = "SELECT * FROM portfolios;", 
  //nativeQuery = true)
  //List<Portfolios> findAllCustom();

}
