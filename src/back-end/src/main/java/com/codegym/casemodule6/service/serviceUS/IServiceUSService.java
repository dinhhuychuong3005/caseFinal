package com.codegym.casemodule6.service.serviceUS;

import com.codegym.casemodule6.model.entity.User_Service;
import com.codegym.casemodule6.service.IGeneralService;

import java.util.List;

public interface IServiceUSService extends IGeneralService<User_Service> {
    List<User_Service> findUser_ServiceById(Long id);
}
