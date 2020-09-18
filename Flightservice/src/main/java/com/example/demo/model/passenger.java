package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="passenger")
public class passenger {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long bookingid;
	
	@Column(name="source")
	private String source;
	@Column(name="destination")
	private String destination;
	@Column(name="flightno")
	private int flightno;
	@Column(name="seatno")
	private int seatno;
	@Column(name="date")
	private String date;
	public passenger()
	{
		
	}
	public passenger(String source, String destination, int flightno, int seatno,String date) {
		super();
		this.source = source;
		this.destination = destination;
		this.flightno = flightno;
		this.seatno = seatno;
		this.date = date;
	}
	public long getBookingid() {
		return bookingid;
	}
	public void setBookingid(long bookingid) {
		this.bookingid = bookingid;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public int getFlightno() {
		return flightno;
	}
	public void setFlightno(int flightno) {
		this.flightno = flightno;
	}
	public int getSeatno() {
		return seatno;
	}
	public void setSeatno(int seatno) {
		this.seatno = seatno;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	
	
}
