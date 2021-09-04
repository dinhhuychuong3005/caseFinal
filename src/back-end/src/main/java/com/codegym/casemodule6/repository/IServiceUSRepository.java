package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.User_Service;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface IServiceUSRepository extends PagingAndSortingRepository<User_Service, Long> {

    //Tìm thông tin CCDV đăng ký
//    @Query( "select u.name, sd.name, us.price , ts.name from User_Service us inner join User u on us.id = u.id " +
//            "inner join Service_Detail sd on us. = sd.id " +
//            "inner join TypeService ts on sd.id = ts.IdType "+ "where us.IdUser = ?1")
//    List<User_Service> findUser_ServiceById(Long id);


}
