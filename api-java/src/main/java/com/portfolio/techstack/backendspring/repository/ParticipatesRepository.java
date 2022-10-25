package com.portfolio.techstack.backendspring.repository;

import org.springframework.beans.factory.annotation.Autowired;
import com.portfolio.techstack.backendspring.model.Participates;
import com.portfolio.techstack.backendspring.model.ParticipatesMongodb;
import com.portfolio.techstack.backendspring.exception.DbNotFoundException;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ParticipatesRepository {
  @Autowired
  private ParticipatesPgRepository participatesPgRepository;
  
  @Autowired
  private ParticipatesMongodbRepository participatesMongodbRepository;

  public void save(Participates participate, String db) {
    if (db.equals("pg"))
          participatesPgRepository.save(participate);

    else if (db.equals("mongodb"))
          participatesMongodbRepository.save(new ParticipatesMongodb(
                      participate.getTitle(), participate.getContent()
                ));

    else
        throw new DbNotFoundException(db);
  }

  public List<Participates> findAll(String db) {
    if (db.equals("pg"))
          return participatesPgRepository.findAll();

    if (db.equals("mongodb"))
          return participatesMongodbRepository.findAllItems();

    throw new DbNotFoundException(db);
  }
}
