package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.User_Service;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IServiceUSRepository extends PagingAndSortingRepository<User_Service,Long> {
}
