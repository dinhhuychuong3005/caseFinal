package com.codegym.casemodule6.service.userService;

import com.codegym.casemodule6.model.entity.Rent;
import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.service.IGeneralService;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Date;
import java.util.Optional;

public interface IUserService extends IGeneralService<User>, UserDetailsService {
    Optional<User> findByUserName(String username);

    Optional<User> findUserByEmail(String email);

    Boolean existsByEmail(String email);

    Boolean existsByUserName(String username);

    Iterable<User> findAllByStatusCCDV();

    Optional<User> findCCDVById(Long id);

    Iterable<User> find12NewCCDV();

    Iterable<User> findAllByAge(int age1, int age2);

    Iterable<User> findAllByNameContaining(String username);

    Iterable<User> findAllByGenderContaining(String gender);

    Iterable<User> findAllByCityContaining(String city);

    //--------admin--------

    //tìm tất cả tài khoản chưa duyệt
    Iterable<User> findAllByStatusCCDVPending();


    //Danh sách đơn thuê có trong hệ thống theo đơn chờ duyệt CCDV
    Iterable<Rent> findAllByStatusCCDVBy3();

    //Danh sách đơn thuê có trong hệ thống theo đơn đã xong và CCDV phản hồi về người thuê
    Iterable<Rent> findAllByStatusBy4();

    //Thống kê giao dịch có status = thành công
    Iterable<Rent> findAllByStatusIsComplete();

    //Thống kê giao dịch có status = chờ phản hồi
    Iterable<Rent> findAllByStatusIsPending();

    //Thống kê giao dịch có status = đã nhận
    Iterable<Rent> findAllByStatusIsRecived();

    //Thống kê chi tiết 1 giao dịch
    Optional<Rent> findDetailRentById(Long id);

}