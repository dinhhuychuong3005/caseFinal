package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRentRepository extends JpaRepository<Rent, Long> {

    @Query("select r from Rent r where r.user.id =:id")
    Iterable<Rent> findByUserId(Long id);

    @Query("select r from Rent r where r.userRent.id =:id")
    Iterable<Rent> findByUserRentId(Long id);
}
