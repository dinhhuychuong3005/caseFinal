package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.Rent;
import com.codegym.casemodule6.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {
    //tìm user theo username
    Optional<User> findUserByUserName(String username);

    //tìm user theo email
    Optional<User> findUserByEmail(String email);

    //kiểm tra email tồn tại chưa
    Boolean existsByEmail(String email);

    //kiểm tra username tồn tại chưa
    Boolean existsByUserName(String username);

    //tìm tất cả user theo trạng thái CCDV đăng ký CCDV hay đã được duyệt nhưng hiện tại đang k CCDV
    @Query("select us from User us where us.statusCCDV =1 or us.statusCCDV =2")
    Iterable<User> findAllByStatusCCDV();

    //tìm user theo status CCDV = đăng ký CCDV đã duyệt và theo id
    @Query("select us from User us where us.statusCCDV =1 and us.id= :id")
    Optional<User> findCCDVById(Long id);

    //tìm tất cả thông tin từ user với status CCDV đã duyệt sắp xếp theo thứ tự giảm dần tối đa 12
    @Query(value = "select * from case_module6.user where statusccdv = 1 order by create_atccdv desc limit 12", nativeQuery = true)
    Iterable<User> find12NewCCDV();

    //tìm tất cả thông tin từ user với status CCDV đã duyệt theo tên
    @Query("select us from User us where us.statusCCDV =1 and us.name like ?1")
    Iterable<User> findAllByNameContaining(String name);

    //tìm tất cả thông tin từ user với status CCDV đã duyệt theo giới tính
    @Query("select us from User us where us.statusCCDV =1 and us.gender like ?1")
    Iterable<User> findAllByGenderContaining(String gender);

    //tìm tất cả thông tin từ user với status CCDV đã duyệt theo thành phố
    @Query("select us from User us where us.statusCCDV =1 and us.city= :city")
    Iterable<User> findAllByCityContaining(String city);

    //tìm tất cả thông tin từ user theo khoảng tuổi
    @Query(value = "Select * from case_module6.user where DATEDIFF(current_date(), date_of_birth)/365 between :age1 and :age2", nativeQuery = true)
    Iterable<User> findAllByAge(int age1, int age2);

    //Phương thức admin
    //tìm tất cả tài khoản chưa duyệt
    @Query("select u from User u where u.statusCCDV =3")
    Iterable<User> findAllByStatusCCDVPending();

    //Danh sách đơn thuê có trong hệ thống
    @Query("select r from Rent r where r.rentDate =:date")
    Iterable<Rent> findRentByDate(Date date);

    //Xem chi tiết 1 đơn trên hệ thống
//    @Query("select rd from Rent_Detail rd where r.rentDate =:date")
//    Iterable<Rent> findRentByDate(Date date);
}
