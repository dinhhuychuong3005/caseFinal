package com.codegym.casemodule6.service.serviceUS;

import com.codegym.casemodule6.model.entity.User_Service;
import com.codegym.casemodule6.service.IGeneralService;

import java.util.List;
import java.util.Optional;

public interface IServiceUSService extends IGeneralService<User_Service> {
    Optional<User_Service> findUser_ServiceById(Long id);
}
