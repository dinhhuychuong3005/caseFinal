package com.codegym.casemodule6.service.rent_detail;

import com.codegym.casemodule6.model.entity.Rent_Detail;
import com.codegym.casemodule6.repository.IRent_DetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Rent_detailService implements IRent_detailService {
    @Autowired
    private IRent_DetailRepository iRent_detailRepository;

    @Override
    public Iterable<Rent_Detail> findAll() {
        return iRent_detailRepository.findAll();
    }

    @Override
    public Optional<Rent_Detail> findById(Long id) {
        return iRent_detailRepository.findById(id);
    }

    @Override
    public Rent_Detail save(Rent_Detail rent_detail) {
        return iRent_detailRepository.save(rent_detail);
    }

    @Override
    public void remove(Long id) {
         iRent_detailRepository.deleteById(id);
    }
}
