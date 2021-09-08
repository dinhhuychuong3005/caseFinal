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

    @Query(value = "select * from user where statusccdv = 1 or statusccdv = 2 order by create_atccdv desc limit 12", nativeQuery = true)
    Iterable<User> find12NewCCDV();

    Iterable<User> findAllByNameContaining(String username);

    Iterable<User> findAllByGenderContaining(String gender);

    Iterable<User> findAllByCityContaining(String city);

    @Query(value = "Select * from user where DATEDIFF(current_date(), date_of_birth)/365 between :age1 and :age2", nativeQuery = true)
    Iterable<User> findAllByAge(int age1, int age2);


}
