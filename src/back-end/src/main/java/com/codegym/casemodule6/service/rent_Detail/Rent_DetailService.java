package com.codegym.casemodule6.service.rent_Detail;

import com.codegym.casemodule6.model.entity.Rent_Detail;
import com.codegym.casemodule6.repository.IRentDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Rent_DetailService implements IRent_DetailService<Rent_Detail> {
    @Autowired
    private IRentDetailRepository repository;
    @Override
    public Iterable<Rent_Detail> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Rent_Detail> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Rent_Detail save(Rent_Detail rent_detail) {
       return repository.save(rent_detail);
    }

    @Override
    public void remove(Long id) {
        repository.deleteById(id);
    }

    @Override
    public Iterable<Rent_Detail> findByRentId(Long id) {
        return repository.findByRentId(id);
    }

    @Override
    public Iterable<Rent_Detail> findByServiceId(Long id) {
        return repository.findByServiceId(id);
    }
}
