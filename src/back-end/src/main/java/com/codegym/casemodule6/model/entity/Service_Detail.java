package com.codegym.casemodule6.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Service_Detail {// chi tiết dịch vụ
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String name;
    public Long idTypeServiec;

    @ManyToOne
    private TypeService typeService;

    @ManyToOne
    private User_Service user_service;

    public Service_Detail() {
    }

    public Service_Detail(Long id, String name, TypeService typeService, User_Service user_service) {
        this.id = id;
        this.name = name;
        this.typeService = typeService;
        this.user_service = user_service;
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

    public TypeService getTypeService() {
        return typeService;
    }

    public void setTypeService(TypeService typeService) {
        this.typeService = typeService;
    }
}

