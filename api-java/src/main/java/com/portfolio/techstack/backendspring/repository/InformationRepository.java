package com.portfolio.techstack.backendspring.repository;

import com.portfolio.techstack.backendspring.model.Informations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface InformationRepository extends JpaRepository<Informations, Long> {
  Optional<Informations> findByTitle(String title);
  @Transactional
  long deleteByTitle(String title);
}
