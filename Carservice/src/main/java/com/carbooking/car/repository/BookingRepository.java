package com.carbooking.car.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carbooking.car.entity.CarBooking;
@Repository
public interface BookingRepository extends JpaRepository<CarBooking,Long>{
   
    
}