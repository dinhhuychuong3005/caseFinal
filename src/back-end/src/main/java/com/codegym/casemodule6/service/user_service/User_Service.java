package com.codegym.casemodule6.service.user_service;

import com.codegym.casemodule6.repository.IUserRepository;
import com.codegym.casemodule6.repository.IUserServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class User_Service implements IUser_Service{
    @Autowired
    private IUserServiceRepository userServiceRepository;

    @Override
    public Iterable<com.codegym.casemodule6.model.entity.User_Service> findAll() {
        return userServiceRepository.findAll();
    }

    @Override
    public Optional<com.codegym.casemodule6.model.entity.User_Service> findById(Long id) {
        return userServiceRepository.findById(id);
    }

    @Override
    public com.codegym.casemodule6.model.entity.User_Service save(com.codegym.casemodule6.model.entity.User_Service user_service) {
        return userServiceRepository.save(user_service);
    }

    @Override
    public void remove(Long id) {
        userServiceRepository.deleteById(id);
    }
}
