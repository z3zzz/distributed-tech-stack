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

    @GetMapping("/participates")
    List<Participates> all(){
        return repository.findAll();
    }

    @PostMapping("/participate/{type}")
    ResponseEntity<ContentResponse> addSelf(@PathVariable String type, @RequestBody Participates participate) {
        String title = type.toLowerCase();  
        participate.setTitle(title);
        
        try {
            repository.save(participate);

            return ResponseEntity.status(201).body(new ContentResponse("등록이 완료되었습니다. 감사합니다 :)"));
        } catch (Exception e) {
            return ResponseEntity.ok().body(new ContentResponse("등록에 실패하였습니다.."));
        }
    }
}
