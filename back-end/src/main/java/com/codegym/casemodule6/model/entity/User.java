package com.codegym.casemodule6.model.entity;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import java.sql.Date;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String userName;
    @NotNull
    private String password;
    @Email
    private String email;
    @NotNull
    private String phoneNumber;
    private String name;
    private Date dateOfBirth;
    private String gender;
    private String city;
    private String nationality;
    private String avatar;
    private String image;
    private int height;
    private int weight;
    private String hobby;
    private String description;
    private String RequestToPayer;
    private String linkFb;
    private Date createAt;
}
