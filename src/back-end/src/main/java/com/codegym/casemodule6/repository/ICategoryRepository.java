package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.ServiceDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IServiceDetailRepository extends JpaRepository<ServiceDetail, Long> {
}
