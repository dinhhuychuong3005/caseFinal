package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.Rent_Detail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRent_DetailRepository extends JpaRepository<Rent_Detail,Long> {
}
