package com.portfolio.techstack.backendspring.repository;

import com.portfolio.techstack.backendspring.model.PortfoliosMongodb;
import com.portfolio.techstack.backendspring.model.Portfolios;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface PortfoliosMongodbRepository extends MongoRepository<PortfoliosMongodb, String> {
    @Query(value="{'group': 'portfolios'}", fields="{'_id' : 0, 'id': 1, 'title': 1, 'content': 1, 'githubLink': 1, 'techStack': 1}")
    List<Portfolios> findAllItems();

    public long count();
}
