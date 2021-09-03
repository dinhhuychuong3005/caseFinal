package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.service.userService.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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

    @GetMapping("/{id}")
    public ResponseEntity<User> findCCDVById(@PathVariable Long id) {
        Optional<User> userOptional = userService.findCCDVById(id);
        return new ResponseEntity<>(userOptional.get(), HttpStatus.OK);
    }
    @GetMapping("/get12new")
    public ResponseEntity<Iterable<User>> get12New() {
        return new ResponseEntity<>(userService.find12NewCCDV(), HttpStatus.OK);
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id) {
        Optional<User> userOptional = userService.findById(id);
        return new ResponseEntity<>(userOptional.get(), HttpStatus.OK);
    }

}
