package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.service.userService.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/usersCCDV")
public class UserCCDVController {
    @Autowired
    private IUserService userService;
    @GetMapping("")
    public ResponseEntity<Iterable<User>> findAll(){
        Iterable<User> users = userService.findAll();
        return new ResponseEntity<>(users,HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        Optional<User> userOptional = userService.findById(id);
        if (!userOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        userOptional.get().setId(id);

        if (!user.getName().trim().equals("") || user.getName()!=null) user.setName(user.getName());
        userOptional.get().setUserName(user.getUserName());
        userOptional.get().setEmail(user.getEmail());
        userOptional.get().setPhoneNumber(user.getPhoneNumber());
        userOptional.get().setPassword(user.getPassword());
        userOptional.get().setAvatar(user.getAvatar());
        if (user.getCity().trim().equals("")) {
            userOptional.get().setCity(user.getCity());
        }
        if (!user.getDescription().trim().equals("") || user.getDescription() != null)
            user.setDescription(userOptional.get().getDescription());
        if (!user.getHeight().trim().equals("") || user.getHeight() != null) user.setHeight(user.getHeight());
        if (!user.getGender().trim().equals("") || user.getGender()!=null) user.setGender(user.getGender());
        if (!user.getHobby().trim().equals("") || user.getHobby() != null) user.setHobby(user.getHobby());
        if (!user.getRequestToPayer().trim().equals("") || user.getRequestToPayer()!=null)
            userOptional.get().setRequestToPayer(user.getRequestToPayer());
        if (!user.getNationality().trim().equals("") ||  user.getNationality() != null)
            userOptional.get().setNationality(user.getNationality());
        userOptional.get().setStatusCCDV(user.getStatusCCDV());
        userOptional.get().setStatusUs(user.getStatusUs());
        userOptional.get().setCreateAt(user.getCreateAt());
        userOptional.get().setRoles(user.getRoles());
        userService.save(userOptional.get());
        return new ResponseEntity<>(userOptional.get(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id) {
        Optional<User> userOptional = userService.findById(id);
        if(!userOptional.isPresent()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity(userOptional,HttpStatus.OK);
    }
}
