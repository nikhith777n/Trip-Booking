package com.hotelbooking.hotel.controller;

import java.util.List;
import java.util.Optional;

import com.hotelbooking.hotel.entity.CustomerBooking;
import com.hotelbooking.hotel.entity.HotelBooking;
import com.hotelbooking.hotel.exception.ResourceNotFoundException;
import com.hotelbooking.hotel.repository.BookingRepository;
import com.hotelbooking.hotel.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3001")
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

    @GetMapping(value = "/allhotels")
    public List<HotelBooking> getAll(){
        return bookingRepository.findAll();
    }

    @GetMapping(value = "/affordable/{price}" )
    public List<HotelBooking> getAffordableHotel(@PathVariable double price){
        return bookingRepository.findByPricePerNightLessThan(price);
    }

    @PostMapping(value = "/createhotel" )
    public List<CustomerBooking> create(@RequestBody CustomerBooking customerBooking){
        customerRepository.save(customerBooking);
        return customerRepository.findAll();
    }

    
    
}