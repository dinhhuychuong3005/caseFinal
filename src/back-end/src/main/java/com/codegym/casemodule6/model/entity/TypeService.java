package com.codegym.casemodule6.model.entity;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Table
public class TypeService {//Loại dịch vụ
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "typeService", cascade = CascadeType.ALL) // Quan hệ 1-n với đối tượng ở dưới (Person) (1 địa điểm có nhiều người ở)
    private Collection<Service_Detail> service_details;

    public TypeService() {
    }

    public TypeService(Long id, String name, Collection<Service_Detail> service_details) {
        this.id = id;
        this.name = name;
        this.service_details = service_details;
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

    public Collection<Service_Detail> getService_details() {
        return service_details;
    }

    public void setService_details(Collection<Service_Detail> service_details) {
        this.service_details = service_details;
    }
}
