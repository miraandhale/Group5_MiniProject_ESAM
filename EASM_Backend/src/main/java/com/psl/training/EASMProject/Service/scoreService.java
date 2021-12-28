package com.psl.training.EASMProject.Service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.psl.training.EASMProject.Entity.EmployeeData;
import com.psl.training.EASMProject.Entity.Employee_score;
import com.psl.training.EASMProject.Repository.CourseRepository;


@Service
public class scoreService {
	
	@Autowired
	private CourseRepository repo;
	
	public scoreService() {}
	
	public scoreService(CourseRepository repo) {
		super();
		this.repo = repo;
	}
	
	public void savescore(Employee_score Employee_score) {
		repo.save(Employee_score);
	}
	
	public Iterable<Employee_score> showscore(){
		return repo.findAll();
	}
	
	public void updateScore(Employee_score Employee_score) {
		repo.save(Employee_score);
	}
	
	public Optional<Employee_score> searchEmp(int id) {
		 return repo.findById(id);
	}
	
	public Optional<Employee_score> searchbyID(int id) {
		 return repo.findById(id);
	}

	public Optional<Employee_score> findScore(int id) {
		 return repo.findById(id);
	}
	

}
