package com.durgasoft.App014.service;

import java.util.List;
import com.durgasoft.App014.beans.Student;

public interface StudentService {
	
	public String addStudent(Student student);
	public Student searchStudent(Integer sid);
	public List<Student> getAllStudent();
	public String updateStudent(Student student);
	public String deleteStudent(Integer integer);

}

