package com.portfolio.techstack.backendspring.repository;

import org.springframework.beans.factory.annotation.Autowired;
import com.portfolio.techstack.backendspring.model.Informations;
import com.portfolio.techstack.backendspring.exception.DbNotFoundException;
import com.portfolio.techstack.backendspring.exception.InformationNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class InformationRepository {
  @Autowired
  private InformationPgRepository informationPgRepository;
  
  @Autowired
  private InformationMongodbRepository informationMongodbRepository;


  public Informations findByTitle(String title, String db) {
    if (db.equals("pg"))
        return informationPgRepository.findByTitle(title)
                .orElseThrow(() -> new InformationNotFoundException(title));

    if (db.equals("mongodb"))
        return informationMongodbRepository.findItemByTitle(title);

    throw new DbNotFoundException(db);

  }
  
}
