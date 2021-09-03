package com.codegym.casemodule6.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Service_Detail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String name;

    @ManyToOne
    private ServiceUS service;

    public Service_Detail() {
    }

    public Service_Detail(Long id, String name, ServiceUS service) {
        this.id = id;
        this.name = name;
        this.service = service;
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

    public ServiceUS getService() {
        return service;
    }

    public void setService(ServiceUS service) {
        this.service = service;
    }
}
