package com.psl.training.EASMProject.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.psl.training.EASMProject.Entity.Employee_score;



@Repository
public interface CourseRepository extends CrudRepository<Employee_score, Integer> {
	 
}