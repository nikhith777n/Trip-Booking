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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3002")
@RestController
@RequestMapping(value = "/admin")
public class BookingController {

    private final BookingRepository bookingRepository;
    private final CustomerRepository customerRepository;

    @Autowired
    public BookingController(final BookingRepository bookingRepository, final CustomerRepository customerRepository) {
        this.bookingRepository = bookingRepository;
        this.customerRepository = customerRepository;
    }

    @GetMapping(value = "/allcars")
    public List<CarBooking> getAll() {
        return bookingRepository.findAll();
    }

    @GetMapping("/customerdetails")
    public List<CustomerBooking> getAllCustomerBookings() {
        return customerRepository.findAll();
    }

   

    @PostMapping(value = "/createcar")
    public List<CarBooking> create(@RequestBody final CarBooking carBooking) {
        bookingRepository.save(carBooking);
        return bookingRepository.findAll();
    }

    @DeleteMapping(value = "/delete/{id}")
    public List<CarBooking> remove(@PathVariable final long id) {
        bookingRepository.deleteById(id);
        return bookingRepository.findAll();
    }

    @PutMapping(value = "/updatestatus/{id}")
    public CarResponseEntity<CarBooking> updateEmployee(@PathVariable final Long id,@RequestBody final CarBooking carBookingDetails) {
        final CarBooking carBooking=bookingRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not exist with id"+id));;
        carBooking.setCarStatus(carBookingDetails.getCarStatus());

        final CarBooking updateStatus=bookingRepository.save(carBooking);
        return CarResponseEntity.ok(updateStatus);


    }

   
}