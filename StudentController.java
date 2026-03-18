package com.durgasoft.App014.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.durgasoft.App014.beans.Student;
import com.durgasoft.App014.service.StudentService;

@RestController	
@RequestMapping("/api/stud")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

	@Autowired
	private StudentService service;
	
	/*
	 * This is POST request to store the data in the  table!
	 */
	
	@PostMapping("/add")
	public ResponseEntity<String> addStud(@RequestBody Student student){
		
		String status = service.addStudent(student);
		
		return new ResponseEntity<>(status,HttpStatus.CREATED);		
	}
	
	/*
	 *  This is GET request to get all the 'Students' record in the data base table !
	 */
	
	@GetMapping("/all")	
	public ResponseEntity<List<Student>> getAll(){
		
		List<Student> studs = service.getAllStudent();
		
		return new ResponseEntity<>(studs,HttpStatus.OK);	
	}
	
	/*
	 *  This is GET request to get student base on the 'id' !
	 */
	
	@GetMapping("/search/{sid}")
	public ResponseEntity<Student> searchStudent(@PathVariable("sid") Integer sid){
		
		Student student = service.searchStudent(sid); 
		
		return new ResponseEntity<Student>(student,HttpStatus.OK);
	}
	
	/*
	 * 	This is PUT request to update the existing the data in the database base on the 'ID' !
	 */
	
	@PutMapping("/update")	
	public ResponseEntity<String> updateStudent(@RequestBody Student student){
		
		String status = service.updateStudent(student);
		
		return new ResponseEntity<>(status,HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{sid}")
	public ResponseEntity<String> deleteStudent(@PathVariable("sid") Integer sid){
		
		String status = service.deleteStudent(sid);
		
		return new ResponseEntity<>(status,HttpStatus.OK);
	}
		
}


