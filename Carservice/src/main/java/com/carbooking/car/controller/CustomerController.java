package com.carbooking.car.controller;

import java.util.List;
import java.util.Optional;

import com.carbooking.car.entity.CustomerBooking;
import com.carbooking.car.entity.CarBooking;
import com.carbooking.car.exception.ResourceNotFoundException;
import com.carbooking.car.repository.BookingRepository;
import com.carbooking.car.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3002")
@RestController
@RequestMapping(value = "/customer")
public class CustomerController {
    private CustomerRepository customerRepository;
    private BookingRepository bookingRepository;

    @Autowired
    public CustomerController(CustomerRepository customerRepository, BookingRepository bookingRepository) {
        this.customerRepository = customerRepository;
        this.bookingRepository = bookingRepository;
    }

    @GetMapping("/details/{id}")
    public Optional<CustomerBooking> getCustomerBookingById(@PathVariable long id) {
    return customerRepository.findById(id);
    }

    @GetMapping(value = "/allcars")
    public List<CarBooking> getAll(){
        return bookingRepository.findAll();
    }

   

    @PostMapping(value = "/createcar" )
    public List<CustomerBooking> create(@RequestBody CustomerBooking customerBooking){
        customerRepository.save(customerBooking);
        return customerRepository.findAll();
    }

    
    
}