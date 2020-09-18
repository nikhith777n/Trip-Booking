package com.hotelbooking.hotel.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CustomerBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="hotelName")
    private String hotelName;
    @Column(name = "roomNumber")
    private String roomNumber;
    @Column(name="checkInDate")
    private Long checkInDate;
    @Column(name="checkOutDate")
    private Long checkOutDate;
    @Column(name = "nbOfDays")
    private int nbOfDays;

    
    public CustomerBooking(){}

    

    


    /**
     * @return int return the nbOfDays
     */
    public int getNbOfDays() {
        return nbOfDays;
    }

    /**
     * @param nbOfDays the nbOfDays to set
     */
    public void setNbOfDays(int nbOfDays) {
        this.nbOfDays = nbOfDays;
    }


    /**
     * @return Long return the c_id
     */
    public Long getid() {
        return id;
    }

    /**
     * @param id the c_id to set
     */
    public void setid(Long id) {
        this.id = id;
    }

    /**
     * @return String return the hotelName
     */
    public String getHotelName() {
        return hotelName;
    }

    /**
     * @param hotelName the hotelName to set
     */
    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    /**
     * @return String return the roomNumber
     */
    public String getRoomNumber() {
        return roomNumber;
    }

    /**
     * @param roomNumber the roomNumber to set
     */
    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }

    /**
     * @return Long return the checkInDate
     */
    public Long getCheckInDate() {
        return checkInDate;
    }

    /**
     * @param checkInDate the checkInDate to set
     */
    public void setCheckInDate(Long checkInDate) {
        this.checkInDate = checkInDate;
    }

    /**
     * @return Long return the checkOutDate
     */
    public Long getCheckOutDate() {
        return checkOutDate;
    }

    /**
     * @param checkOutDate the checkOutDate to set
     */
    public void setCheckOutDate(Long checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public CustomerBooking(Long id, String hotelName, String roomNumber, Long checkInDate, Long checkOutDate,
            int nbOfDays) {
        this.id = id;
        this.hotelName = hotelName;
        this.roomNumber = roomNumber;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.nbOfDays = nbOfDays;
    }


}