package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.Role;
import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.security.jwt.JwtService;
import com.codegym.casemodule6.service.role.IRoleService;
import com.codegym.casemodule6.service.userService.IUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private IUserService userService;

    @Autowired
    private IRoleService roleService;

    @GetMapping("")
    public ResponseEntity<Iterable<User>> findAll() {
        Iterable<User> users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id) {
        Optional<User> userOptional=userService.findById(id);
        if(!userOptional.isPresent()) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(userOptional.get(), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<User> findByUsername(@RequestParam String username){
        Optional<User> userOptional=userService.findByUserName(username);
        if(!userOptional.isPresent()) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(userOptional.get(), HttpStatus.OK);
    }



    @PutMapping("/{id}")
    public ResponseEntity<User> update(@PathVariable Long id,@RequestBody User user){
        Optional<User> userOptional=userService.findById(id);
        if(!userOptional.isPresent()) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        User newUser=userOptional.get();
        if(!user.getName().trim().equals("")) newUser.setName(user.getName());
        if(!user.getUserName().trim().equals("")) newUser.setUserName(user.getUserName());
        if(!user.getEmail().trim().equals("")) newUser.setEmail(user.getEmail());
        if(!user.getImage().trim().equals("")) newUser.setImage(user.getImage());
        if(!user.getPhoneNumber().trim().equals("")) newUser.setPhoneNumber(user.getPhoneNumber());
        if(!user.getPassword().trim().equals("")) newUser.setPassword(user.getPassword());
        userService.save(newUser);
        return new ResponseEntity<>(newUser,HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<User> delete(@PathVariable Long id){
        Optional<User> userOptional=userService.findById(id);
        if(!userOptional.isPresent()) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        userService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/add-role/{id}")
    public ResponseEntity<?> addRole(@PathVariable Long id, @RequestBody Role role) {
        Optional<User> userOptional=userService.findById(id);
        Set<Role> roles = userOptional.get().getRoles();
        switch (role.getName()){
            case "ADMIN":
                Optional<Role> adminRole = roleService.findByName("ADMIN");
                if(!adminRole.isPresent()) return new ResponseEntity<>("Role not found",HttpStatus.OK);
                roles.add(adminRole.get());
                break;
            case "USER":
                Optional<Role> userRole = roleService.findByName("USER");
                if( !userRole.isPresent()) return new ResponseEntity<>("Role not found",HttpStatus.OK);
                roles.add(userRole.get());
                break;
            case "OTHERS":
                Optional<Role> othersRole = roleService.findByName("OTHERS");
                if(!othersRole.isPresent()) return new ResponseEntity<>("Role not found",HttpStatus.OK);
                roles.add(othersRole.get());
                break;
        }
        userOptional.get().setRoles(roles);
        userService.save(userOptional.get());
        return new ResponseEntity<>(userOptional.get(),HttpStatus.OK);
    }

    @PutMapping("/delete-role/{id}")
    public ResponseEntity<?> deleteRole(@PathVariable Long id, @RequestBody Role role) {
        Optional<User> userOptional=userService.findById(id);
        Set<Role> roles = userOptional.get().getRoles();
        switch (role.getName()){
            case "ADMIN":
                Optional<Role> adminRole = roleService.findByName("ADMIN");
                if(!adminRole.isPresent()) return new ResponseEntity<>("Role not found",HttpStatus.OK);
                if(roles.contains(adminRole.get())) roles.remove(adminRole.get());
                else return new ResponseEntity<>("User have no admin role", HttpStatus.OK);
                break;
            case "USER":
                Optional<Role> userRole = roleService.findByName("USER");
                if( !userRole.isPresent()) return new ResponseEntity<>("Role not found",HttpStatus.OK);
                if(roles.contains(userRole.get())) roles.remove(userRole.get());
                else return new ResponseEntity<>("User have no user role", HttpStatus.OK);
                break;
            case "OTHERS":
                Optional<Role> othersRole = roleService.findByName("OTHERS");
                if(!othersRole.isPresent()) return new ResponseEntity<>("Role not found",HttpStatus.OK);
                if(roles.contains(othersRole.get())) roles.remove(othersRole.get());
                else return new ResponseEntity<>("User have no othes role", HttpStatus.OK);
                break;
        }
        userOptional.get().setRoles(roles);
        userService.save(userOptional.get());
        return new ResponseEntity<>(userOptional.get(),HttpStatus.OK);
    }


}
