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
    @Query(value = "select u.name, sd.name, us.price, ts.name from user_service us inner join user u on us.user_id = u.id inner join service_detail sd on us.service_id = sd.id inner join type_service ts on sd.type_service_id = ts.id where us.user_id=:id", nativeQuery = true)
    Optional<User_Service> findUser_ServiceById(Long id);


}
