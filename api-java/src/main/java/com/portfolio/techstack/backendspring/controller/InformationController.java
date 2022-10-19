package com.portfolio.techstack.backendspring.controller;
import com.portfolio.techstack.backendspring.exception.InformationNotFoundException;
import com.portfolio.techstack.backendspring.model.Informations;
import com.portfolio.techstack.backendspring.repository.InformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class InformationController {

    @Autowired
    private InformationRepository informationRepository;

    @PostMapping("/information")
    Informations newInformation(@RequestBody Informations newInformation){
        return informationRepository.save(newInformation);

    }

    @GetMapping("/informations")
    List<Informations> getAllInformations(){
        return informationRepository.findAll();
    }

    @GetMapping("/information/{id}")
    Informations getInformationById(@PathVariable Long id) {
        return informationRepository.findById(id)
                .orElseThrow(() -> new InformationNotFoundException(id));
    }

    @PutMapping("/information/{id}")
    Informations updateInformation(@RequestBody Informations information, @PathVariable Long id) {
        return informationRepository.findById(id)
                .map(info -> {
                    info.setContent(info.getContent());
                    info.setTitle(info.getTitle());
                    return informationRepository.save(info);
                })
                .orElseThrow(() -> new InformationNotFoundException((id)));
    }
}
