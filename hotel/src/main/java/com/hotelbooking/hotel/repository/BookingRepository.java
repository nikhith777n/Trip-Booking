package com.hotelbooking.hotel.repository;

import java.util.List;

import com.hotelbooking.hotel.entity.HotelBooking;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface BookingRepository extends JpaRepository<HotelBooking,Long>{
    List<HotelBooking> findByPricePerNightLessThan(double price);
    
}