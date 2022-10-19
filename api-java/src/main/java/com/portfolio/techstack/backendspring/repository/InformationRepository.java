package com.portfolio.techstack.backendspring.repository;

import com.portfolio.techstack.backendspring.model.Informations;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InformationRepository extends JpaRepository<Informations, Long> {
}
