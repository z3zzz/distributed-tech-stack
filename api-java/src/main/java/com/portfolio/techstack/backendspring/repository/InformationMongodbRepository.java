package com.portfolio.techstack.backendspring.repository;

import com.portfolio.techstack.backendspring.model.InformationsMongodb;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface InformationMongodbRepository extends MongoRepository<InformationsMongodb, String> {
    @Query("{title: '?0'}")
    InformationsMongodb findItemByTitle(String title);

    public long count();


}
