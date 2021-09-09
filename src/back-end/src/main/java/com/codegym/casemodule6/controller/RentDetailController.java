package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.Rent_Detail;
import com.codegym.casemodule6.service.rent_Detail.Rent_DetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rentDetail")
@CrossOrigin("*")
public class RentDetailController {
    @Autowired
    private Rent_DetailService rent_detailService;
    @GetMapping("")
    public ResponseEntity<Iterable<Rent_Detail>> findAll(){
        Iterable<Rent_Detail> rent_details = rent_detailService.findAll();
        return  new ResponseEntity<>(rent_details, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Iterable<Rent_Detail>>findByRentId(@PathVariable Long id){
        Iterable<Rent_Detail> rent_details = rent_detailService.findByRentId(id);
        return new ResponseEntity<>(rent_details, HttpStatus.OK);
    }
    @GetMapping("/service/{id}")
    public ResponseEntity<Iterable<Rent_Detail>>findByServiceId(@PathVariable Long id){
        Iterable<Rent_Detail> rent_details = rent_detailService.findByServiceId(id);
        return new ResponseEntity<>(rent_details, HttpStatus.OK);
    }
}
