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

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        Optional<User> userOptional = userService.findById(id);
        if (!userOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        user.setId(id);

        if (user.getName().trim().equals("") || user.getName() == null) user.setName(userOptional.get().getName());
        user.setUserName(userOptional.get().getUserName());
        user.setEmail(userOptional.get().getEmail());
        user.setPhoneNumber(userOptional.get().getPhoneNumber());
        user.setPassword(userOptional.get().getPassword());
         user.setAvatar(userOptional.get().getAvatar());
        if (user.getCity().trim().equals("") || user.getCity() == null) {
            user.setCity(userOptional.get().getCity());
        }
        if (user.getDescription().trim().equals("") || user.getDescription() == null)
            user.setDescription(userOptional.get().getDescription());
        if (user.getHeight().trim().equals("") || user.getHeight() == null) user.setHeight(userOptional.get().getHeight());
        if (user.getGender().trim().equals("")) user.setGender(userOptional.get().getGender());
        if (user.getHobby().trim().equals("")) user.setHobby(userOptional.get().getHobby());
        if (user.getRequestToPayer().trim().equals(""))
            user.setRequestToPayer(userOptional.get().getRequestToPayer());
        if (!user.getNationality().trim().equals(""))
            user.setNationality(userOptional.get().getNationality());
        user.setStatusCCDV(userOptional.get().getStatusCCDV());
        user.setStatusUs(userOptional.get().getStatusUs());
        user.setCreateAt(userOptional.get().getCreateAt());
        user.setRoles(userOptional.get().getRoles());
        user.setLinkFb(userOptional.get().getLinkFb());
        user.setDateOfBirth(userOptional.get().getDateOfBirth());
        user.setCreateAtCCDV(userOptional.get().getCreateAtCCDV());
        userService.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    @PutMapping("/avatar/{id}")
    public ResponseEntity<User> updateAvatar(@PathVariable Long id,@RequestBody User user){
        Optional<User> userOptional = userService.findById(id);
        if (!userOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        user.setId(id);

        user.setName(userOptional.get().getName());
        user.setUserName(userOptional.get().getUserName());
        user.setEmail(userOptional.get().getEmail());
        user.setPhoneNumber(userOptional.get().getPhoneNumber());
        user.setPassword(userOptional.get().getPassword());

            user.setCity(userOptional.get().getCity());
            user.setDescription(userOptional.get().getDescription());
         user.setHeight(userOptional.get().getHeight());
         user.setGender(userOptional.get().getGender());
         user.setHobby(userOptional.get().getHobby());

            user.setRequestToPayer(userOptional.get().getRequestToPayer());

            user.setNationality(userOptional.get().getNationality());
        user.setStatusCCDV(userOptional.get().getStatusCCDV());
        user.setStatusUs(userOptional.get().getStatusUs());
        user.setCreateAt(userOptional.get().getCreateAt());
        user.setRoles(userOptional.get().getRoles());
        user.setLinkFb(userOptional.get().getLinkFb());
        user.setDateOfBirth(userOptional.get().getDateOfBirth());
        user.setCreateAtCCDV(userOptional.get().getCreateAtCCDV());
        userService.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
