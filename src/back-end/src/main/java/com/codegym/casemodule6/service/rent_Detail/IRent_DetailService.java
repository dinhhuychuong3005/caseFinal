package com.codegym.casemodule6.service.rent_Detail;

import com.codegym.casemodule6.model.entity.Rent_Detail;
import com.codegym.casemodule6.service.IGeneralService;
import org.springframework.data.jpa.repository.Query;

public interface IRent_DetailService<R> extends IGeneralService<Rent_Detail> {
    Iterable<Rent_Detail> findByRentId(Long id);
    Iterable<Rent_Detail> findByServiceId(Long id);
}
