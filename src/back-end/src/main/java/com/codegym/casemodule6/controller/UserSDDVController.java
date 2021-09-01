package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.service.userService.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/usersSDDV")
public class UserSDDVController {
    @Autowired
    private IUserService userService;
    @GetMapping
    public ResponseEntity<Iterable<User>> getAllCCDV(){
        return new ResponseEntity<>(userService.findAllByStatusCCDV(), HttpStatus.OK);
    }
}
