package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User,Long> {
    Optional<User> findUserByUserName(String username);
    Optional<User> findUserByEmail(String email);
    Boolean existsByEmail(String email);
    Boolean existsByUserName(String username);

    @Query("select us from User us where us.statusCCDV =1 or us.statusCCDV =2")
    Iterable<User> findAllByStatusCCDV();

    @Query("select us from User us where (us.statusCCDV =1 or us.statusCCDV =2) and us.id= :id")
    Optional<User> findCCDVById(Long id);

    @Query(value = "select * from user order by create_at desc limit 12", nativeQuery = true)
    Iterable<User> find12NewCCDV();
}
