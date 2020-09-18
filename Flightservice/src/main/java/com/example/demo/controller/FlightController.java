package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.flight;
import com.example.demo.repository.FlightRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/Flightservice")
public class FlightController {
	
	@Autowired
	private FlightRepository frep;
	
	@GetMapping("/flights")
	public List<flight> getall()
	{
		return frep.findAll();
		
	}
	
	@GetMapping("/gflights/{id}")
	public ResponseEntity<flight> getflightById(@PathVariable Long id)
	{
		flight f= frep.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Flight with id not found: "+id));
		return ResponseEntity.ok(f);
	}
	@DeleteMapping("/dflight/{id}")
	public ResponseEntity< Map<String,Boolean>> deleteemp(@PathVariable Long id){
		flight f=frep.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("flight not exist with id:"+id));
		frep.delete(f);
		Map<String,Boolean> response =new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);		
	}
	@PutMapping("/uflight/{id}")
	public ResponseEntity<flight> updateflight(@PathVariable Long id,@RequestBody flight flight){		
		flight f= frep.findById(id)
				.orElseThrow(() ->new ResourceNotFoundException("flight not exist with id: "+id));
		f.setSource(flight.getSource());
		f.setDestination(flight.getDestination());
		f.setPrice(flight.getPrice());
		f.setAs(flight.getAs());
		f.setTseats(flight.getTseats());
		f.setAid(flight.getAid());
		f.setDate(flight.getDate());
		flight updatedf =frep.save(f);
		return ResponseEntity.ok(updatedf);		
	}
	@PutMapping("/uflight/{id}/{as}")
	public ResponseEntity<flight> updateflightseats(@PathVariable Long id,@PathVariable int as){		
		flight f= frep.findById(id)
				.orElseThrow(() ->new ResourceNotFoundException("flight not exist with id: "+id));
		f.setAs(as);
		flight updatedf =frep.save(f);
		return ResponseEntity.ok(updatedf);		
	}
	@PostMapping("/newflight")
	public flight createflight(@RequestBody flight flight)
	{
		System.out.println(flight.getSource());
		return frep.save(flight);
	}
	
	
	
	
	

}
