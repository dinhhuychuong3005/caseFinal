package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.Rent;
import com.codegym.casemodule6.model.entity.Rent_Detail;
import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.service.categoryService.CategoryService;
import com.codegym.casemodule6.service.categoryService.ICategoryService;
import com.codegym.casemodule6.service.rent.IRentService;
import com.codegym.casemodule6.service.rent_detail.IRent_detailService;
import com.codegym.casemodule6.service.userService.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.event.ItemListener;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private IUserService userService;
    @Autowired
    public ICategoryService categoryService;
   @Autowired
    protected  IRentService rentService;
   @Autowired
   private IRent_detailService rent_detailService;
   @GetMapping("/users")
   public ResponseEntity<Iterable<User>> findAllUser(){
       Iterable<User> users = userService.findAll();
       return new ResponseEntity<>(users, HttpStatus.OK);
   }
   @PutMapping("/users/status/{id}")
    public ResponseEntity<User> changeStatusUserbyId(@PathVariable Long id, @RequestParam int statusUs){
       Optional<User> user = userService.findById(id);
       user.get().setStatusUs(statusUs);
       userService.save(user.get());
       return new ResponseEntity<>(user.get(),HttpStatus.OK);
   }
   @GetMapping("/categories")
    public ResponseEntity<Iterable<CategoryService>> findAllCategory(){
       Iterable<com.codegym.casemodule6.model.entity.CategoryService> categoryServices = categoryService.findAll();
       return new ResponseEntity(categoryServices,HttpStatus.OK);
   }
   @PostMapping("/categories/create")
    public ResponseEntity<CategoryService> createCategory(@RequestBody com.codegym.casemodule6.model.entity.CategoryService category){
       categoryService.save(category);
       return new ResponseEntity(categoryService.findById(category.getId()),HttpStatus.OK);
   }
   @PutMapping("/categories/edit/{id}")
    public ResponseEntity<com.codegym.casemodule6.model.entity.CategoryService> updateCategory(@PathVariable Long id, @RequestBody com.codegym.casemodule6.model.entity.CategoryService category){
       Optional<com.codegym.casemodule6.model.entity.CategoryService> categoryService1 = categoryService.findById(id);
               if(!categoryService1.isPresent()){
                   return new ResponseEntity<>(HttpStatus.NO_CONTENT);
               }
               else {
                   category.setId(id);
                   categoryService.save(category);
                   return new ResponseEntity<>(category,HttpStatus.OK);
               }
   }
   @DeleteMapping("/categories/delete/{id}")
   public ResponseEntity<com.codegym.casemodule6.model.entity.CategoryService> deleteCategory(@PathVariable Long id){
       categoryService.remove(id);
       return new ResponseEntity<>(HttpStatus.OK);
   }
   @GetMapping("/rent")
    public ResponseEntity<Iterable<Rent>> getAllRent(){
       Iterable<Rent> rents = rentService.findAll();
       return new ResponseEntity<>(rents,HttpStatus.OK);
   }
   @GetMapping("/rentDetail/{id}")
    public ResponseEntity<Iterable<Rent_Detail>> findAllByRentId(@PathVariable Long id){
       Iterable<Rent_Detail> rent_details = rent_detailService.findByRentId(id);
       return new ResponseEntity<>(rent_details,HttpStatus.OK);
   }
   @GetMapping("/rent/{id}")
    public ResponseEntity<Rent> findById(@PathVariable Long id){
       Optional<Rent> rentOptional = rentService.findById(id);
       return new ResponseEntity(rentOptional,HttpStatus.OK);
   }





}
