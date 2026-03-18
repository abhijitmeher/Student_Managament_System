package com.durgasoft.App014.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.durgasoft.App014.beans.Student;
import com.durgasoft.App014.repository.StudentRepository;

@Service	
public class StudentServiceImpl implements StudentService{
	
	@Autowired	
	private StudentRepository repository;	

	@Override
	public String addStudent(Student student) {
		
		repository.save(student);
		
		return "success";
	}	
	
	@Override
	public Student searchStudent(Integer sid) {
		
		Optional<Student> stud = repository.findById(sid);
		
		if(stud.isPresent()) {
			return stud.get();	
		}
		
		return null;
	}

	@Override
	public List<Student> getAllStudent() {
		
		List<Student> students = repository.findAll();
		
		if(!students.isEmpty()) {
			return students;
		}
		
		return null;
	}

	@Override
	public String updateStudent(Student student) {	
		
		if(repository.existsById(student.getSid())) {
			repository.save(student);
			return "success";
		}else {	
			return "failure";
		}
		
	}

	@Override
	public String deleteStudent(Integer sid) {
		
		if(repository.existsById(sid)) {
			repository.deleteById(sid);
			return "success";
		}else {
			return "failure";
		}

	}
	
}
