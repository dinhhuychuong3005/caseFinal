package com.codegym.casemodule6.service.rent;

import com.codegym.casemodule6.model.entity.Rent;
import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.service.IGeneralService;

import java.util.Optional;

public interface IRentService extends IGeneralService<Rent> {
    Optional<User> getByUserId(Long id);
    Iterable<Rent> findAllByUserId(Long id);
}
