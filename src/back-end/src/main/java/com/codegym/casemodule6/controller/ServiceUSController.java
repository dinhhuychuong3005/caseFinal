package com.codegym.casemodule6.controller;


import com.codegym.casemodule6.dto.response.MessageResponse;
import com.codegym.casemodule6.dto.response.Result;
import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.model.entity.User_Service;
import com.codegym.casemodule6.service.serviceUS.IServiceUSService;
import org.aspectj.bridge.IMessage;
import org.aspectj.bridge.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/service-us")
public class ServiceUSController {

    @Autowired
    IServiceUSService iServiceUSService;

    @GetMapping("/{id}")// hiển thị service theo id user
    public List<User_Service> findUserServiceById(@PathVariable Long id) {
        List<User_Service> user_service = iServiceUSService.findUser_ServiceById(id);
        if (user_service.isEmpty()) {
return (List<User_Service>) new ResponseEntity<User_Service>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<User_Service>((User_Service) user_service, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<User_Service> save(@RequestBody User_Service user_service) {
        return new ResponseEntity<>(iServiceUSService.save(user_service), HttpStatus.CREATED);
    }

}
