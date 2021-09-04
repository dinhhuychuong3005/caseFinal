package com.codegym.casemodule6.model.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class CategoryService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double price;
    private String typeService;


    public CategoryService() {
    }

    public CategoryService(Long id, String name, double price, String typeService) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.typeService = typeService;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getTypeService() {
        return typeService;
    }

    public void setTypeService(String typeService) {
        this.typeService = typeService;
    }
}
