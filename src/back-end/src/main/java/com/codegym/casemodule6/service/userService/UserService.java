package com.codegym.casemodule6.service.userService;

import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.repository.IUserRepository;
import com.codegym.casemodule6.security.userprincal.UserPrinciple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements IUserService{
    @Autowired
    private IUserRepository iUserRepository;

    @Override
    public Iterable<User> findAll() {
        return iUserRepository.findAll();
    }

    @Override
    public Optional<User> findById(Long id) {
        return iUserRepository.findById(id);
    }

    @Override
    public User save(User user) {

        return iUserRepository.save(user);
    }

    @Override
    public void remove(Long id) {
        iUserRepository.deleteById(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userOptional= iUserRepository.findUserByUserName(username);
        if(!userOptional.isPresent()) throw new UsernameNotFoundException(username);
        return UserPrinciple.build(userOptional.get());
    }

    @Override
    public Optional<User> findByUserName(String username) {
        return iUserRepository.findUserByUserName(username);
    }

    @Override
    public Optional<User> findUserByEmail(String email) {
        return iUserRepository.findUserByEmail(email);
    }

    @Override
    public Boolean existsByEmail(String email) {
      return iUserRepository.existsByEmail(email);
    }

    @Override
    public Boolean existsByUserName(String username) {
        return iUserRepository.existsByUserName(username);
    }

}
