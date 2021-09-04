package com.codegym.casemodule6.service.serviceUS;

import com.codegym.casemodule6.model.entity.User_Service;
import com.codegym.casemodule6.repository.IServiceUSRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;


@Service
public class ServiceUSService implements IServiceUSService {

    @Autowired
    IServiceUSRepository iServiceUSRepository;

    @Override
    public Iterable<User_Service> findAll() {
        return iServiceUSRepository.findAll();
    }

    @Override
    public Optional<User_Service> findById(Long id) {
        return iServiceUSRepository.findById(id);
    }

    @Override
    public User_Service save(User_Service user_service) {
        return iServiceUSRepository.save(user_service);
    }

    @Override
    public void remove(Long id) {
        iServiceUSRepository.deleteById(id);
    }

    @Override
    public List<User_Service> findUser_ServiceById(Long id) {
        return iServiceUSRepository.findUser_ServiceById(id);
    }
}
