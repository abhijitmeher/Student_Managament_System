package com.durgasoft.App014.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.durgasoft.App014.beans.Student;

@Repository	
public interface StudentRepository extends JpaRepository<Student, Integer>{

	
	
}
