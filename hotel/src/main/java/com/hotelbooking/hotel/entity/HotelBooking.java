package com.hotelbooking.hotel.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class HotelBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String hotelName;
    private double pricePerNight;
    private int roomNumber;
    private String roomStatus;
   
    public HotelBooking() {
    }

    public HotelBooking(long id, String hotelName, double pricePerNight, int roomNumber,String roomStatus) {
        this.id = id;
        this.hotelName = hotelName;
        this.pricePerNight = pricePerNight;
        this.roomNumber = roomNumber;
        this.roomStatus=roomStatus;
    }
    


    /**
     * @return long return the id
     */
    public long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(long id) {
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
     * @return double return the pricePerNight
     */
    public double getPricePerNight() {
        return pricePerNight;
    }

    /**
     * @param pricePerNight the pricePerNight to set
     */
    public void setPricePerNight(double pricePerNight) {
        this.pricePerNight = pricePerNight;
    }

    /**
     * @return int return the roomNumber
     */
    public int getRoomNumber() {
        return roomNumber;
    }

    /**
     * @param roomNumber the roomNumber to set
     */
    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }
     /**
     * @return String return the hotelName
     */

     public String getRoomStatus() {
         return roomStatus;
     }

     public void setRoomStatus(String roomStatus) {
         this.roomStatus = roomStatus;
     }
   

}