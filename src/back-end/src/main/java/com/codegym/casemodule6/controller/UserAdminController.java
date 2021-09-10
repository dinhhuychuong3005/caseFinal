package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.Rent;
import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.service.userService.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class UserAdminController {

    @Autowired
    private IUserService userService;

    //1.phương thức getAllUser + Page Sort
    @GetMapping("/get-all-users")
    public ResponseEntity<Iterable<User>> getAllUser() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    //2.1 Phương thức duyệt đăng ký tài khoản
    @GetMapping("/get-all-ccdv-pending")
    public ResponseEntity<Iterable<User>> getAllUserCCDVPending() {
        return new ResponseEntity<>(userService.findAllByStatusCCDVPending(), HttpStatus.OK);
    }


    //2.2 Phương thức duyệt đăng ký tài khoản ( nếu đúng cho active)
    @PutMapping("/change-ccdv-pending/{id}")
    public ResponseEntity<Iterable<User>> changeUserCCDVPending(@PathVariable Long id) {
        Optional<User> user = userService.findById(id);
        user.get().setId(id);

        if (user.get().getStatusCCDV() == 3) {
            user.get().setStatusCCDV(2);
        } else {
            userService.save(user.get());
        }
        userService.save(user.get());
        return new ResponseEntity(user.get(), HttpStatus.OK);
    }


    //3.1 Xem danh sách đơn đặt thuê có trong hệ thống fillter CCDV status chờ duyệt
    @GetMapping("/ccdvStatus-pending")
    public ResponseEntity<Iterable<Rent>> findAllByStatusCCDVBy3() {
        return new ResponseEntity<>(userService.findAllByStatusCCDVBy3(), HttpStatus.OK);
    }

    //3.2 Xem danh sách đơn đặt thuê có trong hệ thống fillter CCDV status chờ duyệt
    @GetMapping("/status-admin-response")
    public ResponseEntity<Iterable<Rent>> findAllByStatusBy4() {
        return new ResponseEntity<>(userService.findAllByStatusBy4(), HttpStatus.OK);
    }

    //3.4 Xem danh sách đơn đặt thuê có trong hệ thống fillter status thành công
    @GetMapping("/status-complete")
    public ResponseEntity<Iterable<Rent>> findRentByStatusComplete() {
        return new ResponseEntity<>(userService.findAllByStatusIsComplete(), HttpStatus.OK);
    }

    //3.5 Xem danh sách đơn đặt thuê có trong hệ thống fillter status chờ
    @GetMapping("/status-pending")
    public ResponseEntity<Iterable<Rent>> findRentByStatusPending() {
        return new ResponseEntity<>(userService.findAllByStatusIsPending(), HttpStatus.OK);
    }

    //3.6 Xem danh sách đơn đặt thuê có trong hệ thống fillter status đã nhận đơn
    @GetMapping("/status-recived")
    public ResponseEntity<Iterable<Rent>> findRentByStatusRecived() {
        return new ResponseEntity<>(userService.findAllByStatusIsRecived(), HttpStatus.OK);
    }




    //4.Xem chi tiết 1 đơn trong hệ thống
    @GetMapping("/rent-detail/{id}")
    public ResponseEntity<Iterable<Rent>> findRentDetailById(@PathVariable Long id) {
        Optional<Rent> userOptional = userService.findDetailRentById(id);
        return new ResponseEntity(userOptional.get(), HttpStatus.OK);
    }
    //5.Khóa tài khoản của 1 người dùng dựa id name username
    @PutMapping("/change-block-user/{id}")
    public ResponseEntity<Iterable<User>> changeBlockUser(@PathVariable Long id, String type) {
        Optional<User> user = userService.findById(id);
        user.get().setId(id);

        if (user.get().getStatusUs() == 1) {
            user.get().setStatusCCDV(0);
        } else {
            user.get().setStatusCCDV(1);
        }
        userService.save(user.get());
        return new ResponseEntity(user.get(), HttpStatus.OK);
    }


    //6.Cập nhật người dùng thành vip (*)
    @PutMapping("/change-ccdv-vip/{id}")
    public ResponseEntity<Iterable<User>> changeUserCCDVToVip(@PathVariable Long id) {
        Optional<User> user = userService.findById(id);
        user.get().setId(id);

        if (user.get().getIsVIP() == 0) {
            user.get().setIsVIP(1);
        } else {
            user.get().setIsVIP(0);
        }
        userService.save(user.get());
        return new ResponseEntity(user.get(), HttpStatus.OK);
    }


    //8.Xác nhận cung cấp thông tin phản hồi từ CCDV ( report)


}
