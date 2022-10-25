package com.portfolio.techstack.backendspring.repository;

import com.portfolio.techstack.backendspring.model.Participates;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface ParticipatesPgRepository extends JpaRepository<Participates, Long> {
}
