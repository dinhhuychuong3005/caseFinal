package com.codegym.casemodule6.service.userService;

import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.service.IGeneralService;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface IUserService extends IGeneralService<User>, UserDetailsService {
    Optional<User> findByUserName(String username);
    Optional<User> findUserByEmail(String email);
    Boolean existsByEmail(String email);
    Boolean existsByUserName(String username);
    Iterable<User> findAllByStatusCCDV();
    Optional<User> findCCDVById(Long id);
    Iterable<User> find12NewCCDV();
}
