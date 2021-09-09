package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.Rent;
import com.codegym.casemodule6.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IRentRepository extends JpaRepository<Rent,Long> {
    @Query("select r from Rent r where r.user.id = ?1")
    Optional<User> getByUserId(Long id);
    Iterable<Rent> findAllByUserId(Long id);

}
