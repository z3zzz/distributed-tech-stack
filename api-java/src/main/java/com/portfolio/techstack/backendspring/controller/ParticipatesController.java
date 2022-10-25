package com.portfolio.techstack.backendspring.controller;
import com.portfolio.techstack.backendspring.model.Participates;
import com.portfolio.techstack.backendspring.repository.ParticipatesRepository;
import com.portfolio.techstack.backendspring.utils.ContentResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
public class ParticipatesController {

    @Autowired
    private ParticipatesRepository repository;

    @GetMapping("/participates/{db}")
    List<Participates> all(@PathVariable String db){
        return repository.findAll(db);
    }

    @PostMapping("/participate/{type}/{db}")
    ResponseEntity<ContentResponse> addSelf(@PathVariable String type, @PathVariable String db, @RequestBody Participates participate) {
        String title = type.toLowerCase();  
        participate.setTitle(title);
        
        try {
            repository.save(participate, db);

            return ResponseEntity.status(201).body(new ContentResponse("등록이 완료되었습니다. 감사합니다 :)"));
        } catch (Exception e) {
            return ResponseEntity.ok().body(new ContentResponse("등록에 실패하였습니다.."));
        }
    }
}
