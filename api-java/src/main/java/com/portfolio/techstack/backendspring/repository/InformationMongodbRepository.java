package com.portfolio.techstack.backendspring.repository;

import com.portfolio.techstack.backendspring.model.InformationsMongodb;
import com.portfolio.techstack.backendspring.model.Informations;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface InformationMongodbRepository extends MongoRepository<InformationsMongodb, String> {
    @Query(value="{'title':'?0'}", fields="{'id': 0}")
    Informations findItemByTitle(String title);

    @Query(value="{'title':'?0'}")
    InformationsMongodb findByTitle(String title);

    @Query(value="{}", fields="{'id' : 0}")
    List<Informations> findAllItems();

    @Transactional
    long deleteItemByTitle(String title);

    public long count();


}
