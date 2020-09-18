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
import com.example.demo.model.passenger;
import com.example.demo.repository.PassengerRespository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/Passengerservice")
public class PassengerController {

	@Autowired
	private PassengerRespository prepo;
	
	public List<passenger> getAll()
	{
		return prepo.findAll();
	}
    //create employee
	@PostMapping("/passenger")
	public passenger createpassenger(@RequestBody passenger passenger)
	{
		System.out.println(passenger.getBookingid());
		return prepo.save(passenger);
	}
	
	@PostMapping("/cpassenger")
	public passenger cpassenger(@RequestBody passenger passenger)
	{
		System.out.println(passenger.getBookingid());
		return prepo.save(passenger);
	}
	@GetMapping("/passsenger/{id}")
	public ResponseEntity<passenger> getEmployeeById(@PathVariable Long id)
	{
		passenger p= prepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("passenger with id not found: "+id));
		return ResponseEntity.ok(p);
	}
	//put
	@PutMapping("/passenger/{id}")
	/*public ResponseEntity<passenger> updatepassenger(@PathVariable Long id,@RequestBody passenger passenger){		
		passenger p= prepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee with id not found: "+id));
		p.setFirstname(passenger.getBookingid());
		passenger updatedpassenger =prepo.save(passenger);
		return ResponseEntity.ok(updatedpassenger);
		
		
	}*/
	//delete
	@DeleteMapping("/passenger/{id}")
	public ResponseEntity< Map<String,Boolean>> deletepassenger(@PathVariable Long id){
		passenger p=prepo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Employee not exist with id:"+id));
		prepo.delete(p);
		Map<String,Boolean> response =new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
	
}
