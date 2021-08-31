package com.codegym.casemodule6.model.entity;

import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.sql.Date;
import java.util.Set;

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
    private String height;
    private String weight;
    private String hobby;
    private String description;
    private String RequestToPayer;
    private String linkFb;
    private Date createAt;
    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Role> roles;

    public User() {
    }


    public User(String userName, String password, String email, String phoneNumber, String name, Date dateOfBirth, String gender, String city, String nationality, String avatar, String image, String height, String weight, String hobby, String description, String requestToPayer, String linkFb, Date createAt, Set<Role> roles) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.city = city;
        this.nationality = nationality;
        this.avatar = avatar;
        this.image = image;
        this.height = height;
        this.weight = weight;
        this.hobby = hobby;
        this.description = description;
        RequestToPayer = requestToPayer;
        this.linkFb = linkFb;
        this.createAt = createAt;
        this.roles = roles;
    }

    public User(String userName, String password, String email, String phoneNumber) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRequestToPayer() {
        return RequestToPayer;
    }

    public void setRequestToPayer(String requestToPayer) {
        RequestToPayer = requestToPayer;
    }

    public String getLinkFb() {
        return linkFb;
    }

    public void setLinkFb(String linkFb) {
        this.linkFb = linkFb;
    }

    public Date getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}