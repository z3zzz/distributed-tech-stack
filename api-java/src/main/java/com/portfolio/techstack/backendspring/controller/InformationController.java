package com.portfolio.techstack.backendspring.controller;
import com.portfolio.techstack.backendspring.exception.InformationNotFoundException;
import com.portfolio.techstack.backendspring.model.Informations;
import com.portfolio.techstack.backendspring.model.Portfolios;
import com.portfolio.techstack.backendspring.repository.InformationRepository;
import com.portfolio.techstack.backendspring.repository.PortfoliosRepository;
import com.portfolio.techstack.backendspring.utils.ContentResponse;
import com.portfolio.techstack.backendspring.utils.PutDeletePassword;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
public class InformationController {

    @Autowired
    private PortfoliosRepository portfoliosRepository;

    @Autowired
    private InformationRepository informationRepository;

    @GetMapping("/self/{type}/{db}")
    Informations oneSelf(@PathVariable String type, @PathVariable String db){
        String title = "self_" + type.toLowerCase();  

        return informationRepository.findByTitle(title, db);
    }

    @GetMapping("/dev/portfolio/{db}")
    List<Portfolios> allPortfolios(@PathVariable String db){
        return portfoliosRepository.findAll(db);
    }

    @GetMapping("/dev/{type}/{db}")
    Informations oneDev(@PathVariable String type, @PathVariable String db){
        String title = "dev_" + type.toLowerCase();  

        return informationRepository.findByTitle(title, db);
    }

    @PostMapping("/self/{type}/{db}")
    ResponseEntity<ContentResponse> addSelf(@PathVariable String type, @PathVariable String db, @RequestBody Informations information) {
        String title = "self_" + type.toLowerCase();  
        information.setTitle(title);
        
        try {
            informationRepository.save(information, db);

            return ResponseEntity.status(201).body(new ContentResponse("????????? ?????????????????????. ??????????????? :)"));
        } catch (Exception e) {
            return ResponseEntity.ok().body(new ContentResponse("????????? ?????????????????????.."));
        }
    }

    @PostMapping("/dev/{type}/{db}")
    ResponseEntity<ContentResponse> addDev(@PathVariable String type, @PathVariable String db, @RequestBody Informations information) {
        String title = "dev_" + type.toLowerCase();  
        information.setTitle(title);
        
        try {
            informationRepository.save(information, db);

            return ResponseEntity.status(201).body(new ContentResponse("????????? ?????????????????????. ??????????????? :)"));
        } catch (Exception e) {
            return ResponseEntity.ok().body(new ContentResponse("????????? ?????????????????????.."));
        }
    }

    @GetMapping("/self/{db}")
    List<Informations> allSelf(@PathVariable String db) {
        return informationRepository.findAll(db);
    }

    @GetMapping("/dev/{db}")
    List<Informations> allDev(@PathVariable String db) {
        return informationRepository.findAll(db);
    }

    @PutMapping("/self/{type}/{db}")
    ContentResponse updateSelf(@RequestBody PutDeletePassword newInformation, @PathVariable String type, @PathVariable String db) {
        String password = newInformation.getPassword();
        String correctPassword = System.getenv("MY_PASSWORD");

        if (!password.equals(correctPassword))
            return new ContentResponse("??????????????? ???????????? ????????????.");

        String title = "self_" + type.toLowerCase();  
        String content = newInformation.getContent();

        try {
           informationRepository.update(title, content, db);

           return new ContentResponse("????????? ?????????????????????.");
        } catch (Exception e) {
          System.out.println(e);
          return new ContentResponse("????????? ?????????????????????.");
        } 
    }

    @PutMapping("/dev/{type}/{db}")
    ContentResponse updateDev(@RequestBody PutDeletePassword newInformation, @PathVariable String type, @PathVariable String db) {
        String password = newInformation.getPassword();
        String correctPassword = System.getenv("MY_PASSWORD");

        if (!password.equals(correctPassword))
            return new ContentResponse("??????????????? ???????????? ????????????.");

        if (type == "portfolio")
            return new ContentResponse("?????????????????? ????????? ???????????????.");

        String title = "dev_" + type.toLowerCase();  
        String content = newInformation.getContent();

        try {
            informationRepository.update(title, content, db);

            return new ContentResponse("????????? ?????????????????????.");
        } catch (Exception e) {
            return new ContentResponse("????????? ?????????????????????.");
        } 
    }

    @DeleteMapping("/self/{type}/{db}")
    ContentResponse deleteSelf(@PathVariable String type, @PathVariable String db, @RequestBody PutDeletePassword passwordInput) {
        String password = passwordInput.getPassword();
        String correctPassword = System.getenv("MY_PASSWORD");

        if (!password.equals(correctPassword))
            return new ContentResponse("??????????????? ???????????? ????????????.");

        String title = "self_" + type.toLowerCase();  
        long deletedCount = informationRepository.deleteByTitle(title, db);

        if (deletedCount == 0) 
          return new ContentResponse("????????? ?????????????????????.");
        else
          return new ContentResponse("????????? ?????????????????????.");
    }

    @DeleteMapping("/dev/{type}/{db}")
    ContentResponse deleteDev(@PathVariable String type, @PathVariable String db, @RequestBody PutDeletePassword passwordInput) {
        String password = passwordInput.getPassword();
        String correctPassword = System.getenv("MY_PASSWORD");

        if (!password.equals(correctPassword))
            return new ContentResponse("??????????????? ???????????? ????????????.");

        String title = "dev_" + type.toLowerCase();  
        long deletedCount = informationRepository.deleteByTitle(title, db);

        if (deletedCount == 0) 
          return new ContentResponse("????????? ?????????????????????.");
        else
          return new ContentResponse("????????? ?????????????????????.");
    }
}
