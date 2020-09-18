package com.carbooking.car.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CustomerBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name="SourceLocation")
    private String SourceLocation;
    @Column(name = "DestinationLocation")
    private String DestinationLocation;
    @Column(name="LeavingDate")
    private Long LeavingDate;
    @Column(name="ReturningDate")
    private Long ReturningDate;
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
    public String getSourceLocation() {
        return SourceLocation;
    }

    /**
     * @param hotelName the hotelName to set
     */
    public void setSourceLocation(String SourceLocation) {
        this.SourceLocation = SourceLocation;
    }

    /**
     * @return String return the roomNumber
     */
    public String getDestinationLocation() {
        return DestinationLocation;
    }

    /**
     * @param roomNumber the roomNumber to set
     */
    public void setDestinationLocation(String DestinationLocation) {
        this.DestinationLocation = DestinationLocation;
    }

    /**
     * @return Long return the checkInDate
     */
    public Long getLeavingDate() {
        return LeavingDate;
    }

    /**
     * @param checkInDate the checkInDate to set
     */
    public void setLeavingDate(Long LeavingDate) {
        this.LeavingDate = LeavingDate;
    }

    /**
     * @return Long return the checkOutDate
     */
    public Long getReturningDate() {
        return ReturningDate;
    }

    /**
     * @param checkOutDate the checkOutDate to set
     */
    public void setReturningDate(Long ReturningDate) {
        this.ReturningDate = ReturningDate;
    }

    public CustomerBooking(Long id, String SourceLocation, String DestinationLocation, Long LeavingDate, Long ReturningDate,
            int nbOfDays) {
        this.id = id;
        this.SourceLocation = SourceLocation;
        this.DestinationLocation = DestinationLocation;
        this.LeavingDate = LeavingDate;
        this.ReturningDate = ReturningDate;
        this.nbOfDays = nbOfDays;
    }


}