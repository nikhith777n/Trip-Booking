package com.hotelbooking.hotel.repository;

import com.hotelbooking.hotel.entity.CustomerBooking;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CustomerRepository extends JpaRepository<CustomerBooking,Long> {
    
}