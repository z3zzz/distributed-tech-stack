package com.portfolio.techstack.backendspring.repository;

import org.springframework.beans.factory.annotation.Autowired;
import com.portfolio.techstack.backendspring.model.Informations;
import com.portfolio.techstack.backendspring.model.InformationsMongodb;
import com.portfolio.techstack.backendspring.exception.DbNotFoundException;
import com.portfolio.techstack.backendspring.exception.InformationNotFoundException;
import org.springframework.stereotype.Component;

import java.util.List;

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

  public void save(Informations information, String db) {
    if (db.equals("pg"))
          informationPgRepository.save(information);

    else if (db.equals("mongodb"))
          informationMongodbRepository.save(new InformationsMongodb(
                      information.getTitle(), information.getContent(), information.getPhotos()
                ));

    else
        throw new DbNotFoundException(db);
  }

  public void update(String title, String content, String db) {
    if (db.equals("pg")) {
        Informations information = informationPgRepository.findByTitle(title)
                                    .orElseThrow(() -> new InformationNotFoundException(title));
        information.setContent(content);
        informationPgRepository.save(information);
    }

    else if (db.equals("mongodb")) {
        InformationsMongodb information = informationMongodbRepository.findByTitle(title);
        information.setContent(content);
        InformationsMongodb newInfo = informationMongodbRepository.save(information);
    }

    else
        throw new DbNotFoundException(db);
    
  }
  
  public List<Informations> findAll(String db) {
    if (db.equals("pg"))
          return informationPgRepository.findAll();

    if (db.equals("mongodb"))
          return informationMongodbRepository.findAllItems();

    throw new DbNotFoundException(db);
  }

  public Long deleteByTitle(String title, String db) {
    if (db.equals("pg"))
          return informationPgRepository.deleteByTitle(title);

    if (db.equals("mongodb"))
          return informationMongodbRepository.deleteItemByTitle(title);

    throw new DbNotFoundException(db);
  }
}
