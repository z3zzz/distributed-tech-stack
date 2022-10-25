package com.portfolio.techstack.backendspring.repository;

import com.portfolio.techstack.backendspring.model.ParticipatesMongodb;
import com.portfolio.techstack.backendspring.model.Participates;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ParticipatesMongodbRepository extends MongoRepository<ParticipatesMongodb, String> {
    @Query(value="{}", fields="{'id' : 0}")
    List<Participates> findAllItems();

    public long count();
}
