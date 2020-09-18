package com.carbooking.car.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carbooking.car.entity.CustomerBooking;
@Repository
public interface CustomerRepository extends JpaRepository<CustomerBooking,Long> {
    
}