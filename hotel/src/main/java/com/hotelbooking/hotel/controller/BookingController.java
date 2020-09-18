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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3001")
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

    @GetMapping(value = "/allhotels")
    public List<HotelBooking> getAll() {
        return bookingRepository.findAll();
    }

    @GetMapping("/customerdetails")
    public List<CustomerBooking> getAllCustomerBookings() {
        return customerRepository.findAll();
    }

    @GetMapping(value = "/affordable/{price}")
    public List<HotelBooking> getAffordableHotel(@PathVariable final double price) {
        return bookingRepository.findByPricePerNightLessThan(price);
    }

    @PostMapping(value = "/create")
    public List<HotelBooking> create(@RequestBody final HotelBooking hotelBooking) {
        bookingRepository.save(hotelBooking);
        return bookingRepository.findAll();
    }

    @DeleteMapping(value = "/delete/{id}")
    public List<HotelBooking> remove(@PathVariable final long id) {
        bookingRepository.deleteById(id);
        return bookingRepository.findAll();
    }

    @PutMapping(value = "/updatestatus/{id}")
    public HotelResponseEntity<HotelBooking> updateEmployee(@PathVariable final Long id,@RequestBody final HotelBooking hotelBookingDetails) {
        final HotelBooking hotelBooking=bookingRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not exist with id"+id));;
        hotelBooking.setRoomStatus(hotelBookingDetails.getRoomStatus());

        final HotelBooking updateStatus=bookingRepository.save(hotelBooking);
        return HotelResponseEntity.ok(updateStatus);


    }

   
}