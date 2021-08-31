package com.codegym.casemodule6.service.userService;

import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.service.IGeneralService;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IUserService extends IGeneralService<User>, UserDetailsService {
}
