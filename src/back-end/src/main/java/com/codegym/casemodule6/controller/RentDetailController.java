package com.codegym.casemodule6.controller;
import com.codegym.casemodule6.model.entity.Rent_Detail;
import com.codegym.casemodule6.service.rent_Detail.IRent_detailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/detail")
public class RentDetailController {
    @Autowired
    private IRent_detailService rent_detailService;
    @GetMapping("")
    public ResponseEntity<Iterable<Rent_Detail>> findAll(){
        Iterable<Rent_Detail> rents = rent_detailService.findAll();
        return new ResponseEntity<>(rents, HttpStatus.OK);
    }
}
