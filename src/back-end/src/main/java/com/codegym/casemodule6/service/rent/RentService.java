package com.codegym.casemodule6.service.rent;

import com.codegym.casemodule6.model.entity.Rent;
import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.repository.IRentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RentService implements IRentService{
    @Autowired
    private IRentRepository rentRepository;
    @Override
    public Iterable<Rent> findAll() {
        return rentRepository.findAll();
    }

    @Override
    public Optional<Rent> findById(Long id) {
        return rentRepository.findById(id);
    }

    @Override
    public Rent save(Rent rent) {
        return rentRepository.save(rent);
    }

    @Override
    public void remove(Long id) {
            rentRepository.deleteById(id);
    }

    @Override
    public Optional<User> getByUserId(Long id) {
        return rentRepository.getByUserId(id);
    }

    @Override
    public Iterable<Rent> findAllByUserId(Long id) {
        return rentRepository.findAllByUserId(id);
    }
}
