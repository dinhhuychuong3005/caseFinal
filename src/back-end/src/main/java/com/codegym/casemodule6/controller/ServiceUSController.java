package com.codegym.casemodule6.controller;


import com.codegym.casemodule6.model.entity.User_Service;
import com.codegym.casemodule6.service.serviceUS.IServiceUSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/service-us")
public class ServiceUSController {

    @Autowired
    IServiceUSService iServiceUSService;

    @GetMapping("/{id}")// hiển thị service theo id user
    public ResponseEntity findUserServiceById(@PathVariable Long id) {
        Optional<User_Service> user_service = iServiceUSService.findUser_ServiceById(id);
        return new ResponseEntity(user_service.get(), HttpStatus.OK);

    }
//    @PostMapping("/{id}")// hiển thị service theo id user
//    public ResponseEntity findByID(@PathVariable Long id) {
//        Optional<User_Service> user_service = iServiceUSService.findById(id);
//        return new ResponseEntity(user_service.get(), HttpStatus.OK);
//
//    }


    @PostMapping
    public ResponseEntity<User_Service> save(@RequestBody User_Service user_service) {
        return new ResponseEntity<>(iServiceUSService.save(user_service), HttpStatus.CREATED);
    }

}
