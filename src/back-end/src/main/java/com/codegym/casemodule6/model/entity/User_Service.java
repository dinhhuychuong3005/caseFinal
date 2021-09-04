package com.codegym.casemodule6.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class User_Service {// tổng hợp dịch vụ
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private User user;


    @OneToMany(mappedBy = "user_service")
    List<Service_Detail> service_details;



    private int price;

    public User_Service() {
    }

    public User_Service(Long id, User user, List<Service_Detail> service_details, int price) {
        this.id = id;
        this.user = user;
        this.service_details = service_details;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Service_Detail> getService_details() {
        return service_details;
    }

    public void setService_details(List<Service_Detail> service_details) {
        this.service_details = service_details;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
