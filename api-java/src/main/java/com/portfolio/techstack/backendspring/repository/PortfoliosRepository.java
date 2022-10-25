package com.portfolio.techstack.backendspring.repository;

import org.springframework.beans.factory.annotation.Autowired;
import com.portfolio.techstack.backendspring.model.Portfolios;
import com.portfolio.techstack.backendspring.model.PortfoliosMongodb;
import com.portfolio.techstack.backendspring.exception.DbNotFoundException;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PortfoliosRepository {
  @Autowired
  private PortfoliosPgRepository portfoliosPgRepository;
  
  @Autowired
  private PortfoliosMongodbRepository portfoliosMongodbRepository;

  public List<Portfolios> findAll(String db) {
    if (db.equals("pg"))
          return portfoliosPgRepository.findAll();

    if (db.equals("mongodb")) {
          List<Portfolios> portfolios = portfoliosMongodbRepository.findAllItems();
          
          //for (Portfolios p: portfolios) System.out.println(p);

          return portfolios;

    }

    throw new DbNotFoundException(db);
  }
}
