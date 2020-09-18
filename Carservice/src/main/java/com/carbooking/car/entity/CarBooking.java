package com.carbooking.car.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CarBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String DriverName;
    private double PricePerMile;
    private String CarStatus;
    private String CarNumber;
   
    public CarBooking() {
    }

    public String getCarNumber() {
		return CarNumber;
	}

	public void setCarNumber(String carNumber) {
		CarNumber = carNumber;
	}

	public CarBooking(long id, String DriverName, double PricePerMile,String CarStatus, String CarNumber) {
        this.id = id;
        this.DriverName = DriverName;
        this.PricePerMile = PricePerMile;
        this.CarStatus=CarStatus;
        this.CarNumber=CarNumber;
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
    public String getDriverName() {
        return DriverName;
    }
    
    /**
     * @param hotelName the hotelName to set
     */
    public void setDriverName(String DriverName) {
        this.DriverName = DriverName;
    }

    /**
     * @return double return the pricePerNight
     */
    public double getPricePerMile() {
        return PricePerMile;
    }

    /**
     * @param pricePerNight the pricePerNight to set
     */
    public void setPricePerMile(double PricePerMile) {
        this.PricePerMile = PricePerMile;
    }

   

     public String getCarStatus() {
         return CarStatus;
     }

     public void setCarStatus(String CarStatus) {
         this.CarStatus = CarStatus;
     }
   

}