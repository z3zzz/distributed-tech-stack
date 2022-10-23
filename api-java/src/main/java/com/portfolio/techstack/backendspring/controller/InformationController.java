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
    private InformationRepository informationRepository;

    @Autowired
    private PortfoliosRepository portfoliosRepository;

    @GetMapping("/self/{type}")
    Informations oneSelf(@PathVariable String type){
        String title = "self_" + type.toLowerCase();  

        return informationRepository.findByTitle(title)
                .orElseThrow(() -> new InformationNotFoundException(title));
    }

    @GetMapping("/dev/portfolio")
    List<Portfolios> allPortfolios(){
        return portfoliosRepository.findAll();
    }

    @GetMapping("/dev/{type}")
    Informations oneDev(@PathVariable String type){
        String title = "dev_" + type.toLowerCase();  

        return informationRepository.findByTitle(title)
                .orElseThrow(() -> new InformationNotFoundException(title));
    }

    @PostMapping("/self/{type}")
    ResponseEntity<ContentResponse> addSelf(@PathVariable String type, @RequestBody Informations information) {
        String title = "self_" + type.toLowerCase();  
        information.setTitle(title);
        
        try {
            informationRepository.save(information);

            return ResponseEntity.status(201).body(new ContentResponse("등록이 완료되었습니다. 감사합니다 :)"));
        } catch (Exception e) {
            return ResponseEntity.ok().body(new ContentResponse("등록에 실패하였습니다.."));
        }
    }

    @PostMapping("/dev/{type}")
    ResponseEntity<ContentResponse> addDev(@PathVariable String type, @RequestBody Informations information) {
        String title = "dev_" + type.toLowerCase();  
        information.setTitle(title);
        
        try {
            informationRepository.save(information);

            return ResponseEntity.status(201).body(new ContentResponse("등록이 완료되었습니다. 감사합니다 :)"));
        } catch (Exception e) {
            return ResponseEntity.ok().body(new ContentResponse("등록에 실패하였습니다.."));
        }
    }

    @GetMapping("/self")
    List<Informations> allSelf() {
        return informationRepository.findAll();
    }

    @GetMapping("/dev")
    List<Informations> allDev() {
        return informationRepository.findAll();
    }

    @PutMapping("/self/{type}")
    ContentResponse updateSelf(@RequestBody PutDeletePassword newInformation, @PathVariable String type) {
        String password = newInformation.getPassword();
        String correctPassword = System.getenv("MY_PASSWORD");

        if (!password.equals(correctPassword))
            return new ContentResponse("비밀번호가 일치하지 않습니다.");

        String title = "self_" + type.toLowerCase();  
        Informations information = informationRepository.findByTitle(title)
                                    .orElseThrow(() -> new InformationNotFoundException(title));

        information.setContent(newInformation.getContent());

        try {
           informationRepository.save(information);

           return new ContentResponse("수정이 완료되었습니다.");
        } catch (Exception e) {
          return new ContentResponse("수정에 실패하였습니다.");
        } 
    }

    @PutMapping("/dev/{type}")
    ContentResponse updateDev(@RequestBody PutDeletePassword newInformation, @PathVariable String type) {
        String password = newInformation.getPassword();
        String correctPassword = System.getenv("MY_PASSWORD");

        if (!password.equals(correctPassword))
            return new ContentResponse("비밀번호가 일치하지 않습니다.");

        if (type == "portfolio")
          return new ContentResponse("포트폴리오는 수정이 불가합니다.");

        String title = "dev_" + type.toLowerCase();  
        Informations information = informationRepository.findByTitle(title)
                                    .orElseThrow(() -> new InformationNotFoundException(title));

        information.setContent(newInformation.getContent());

        try {
           informationRepository.save(information);

           return new ContentResponse("수정이 완료되었습니다.");
        } catch (Exception e) {
          return new ContentResponse("수정에 실패하였습니다.");
        } 
    }

    @DeleteMapping("/self/{type}")
    ContentResponse deleteSelf(@PathVariable String type, @RequestBody PutDeletePassword passwordInput) {
        String password = passwordInput.getPassword();
        String correctPassword = System.getenv("MY_PASSWORD");

        if (!password.equals(correctPassword))
            return new ContentResponse("비밀번호가 일치하지 않습니다.");

        String title = "self_" + type.toLowerCase();  
        long deletedCount = informationRepository.deleteByTitle(title);

        if (deletedCount == 0) 
          return new ContentResponse("삭제에 실패하였습니다.");
        else
          return new ContentResponse("삭제에 성공하였습니다.");
    }

    @DeleteMapping("/dev/{type}")
    ContentResponse deleteDev(@PathVariable String type, @RequestBody PutDeletePassword passwordInput) {
        String password = passwordInput.getPassword();
        String correctPassword = System.getenv("MY_PASSWORD");

        if (!password.equals(correctPassword))
            return new ContentResponse("비밀번호가 일치하지 않습니다.");

        String title = "dev_" + type.toLowerCase();  
        long deletedCount = informationRepository.deleteByTitle(title);

        if (deletedCount == 0) 
          return new ContentResponse("삭제에 실패하였습니다.");
        else
          return new ContentResponse("삭제에 성공하였습니다.");
    }
}
