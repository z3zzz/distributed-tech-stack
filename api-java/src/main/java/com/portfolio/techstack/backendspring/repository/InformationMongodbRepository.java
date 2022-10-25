package com.portfolio.techstack.backendspring.repository;

import com.portfolio.techstack.backendspring.model.InformationsMongodb;
import com.portfolio.techstack.backendspring.model.Informations;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface InformationMongodbRepository extends MongoRepository<InformationsMongodb, String> {
    @Query(value="{'title':'?0'}", fields="{'id': 0}")
    Informations findItemByTitle(String title);

    public long count();


}
