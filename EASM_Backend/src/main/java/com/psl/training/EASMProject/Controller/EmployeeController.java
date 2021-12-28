package com.psl.training.EASMProject.Controller;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.psl.training.EASMProject.Entity.AdminDetails;
import com.psl.training.EASMProject.Entity.EmployeeData;
import com.psl.training.EASMProject.Entity.Employee_score;
import com.psl.training.EASMProject.Service.AdminService;
import com.psl.training.EASMProject.Service.EmployeeService;
import com.psl.training.EASMProject.Service.scoreService;



@RestController
public class EmployeeController 
{
	@Autowired
	private EmployeeService service;
	
	@Autowired
	private scoreService scoreservice;
	
	@Autowired
	private AdminService adminservice;
	
	
	//create api to insert data in table
	@PostMapping("/insert")
	@CrossOrigin
	public String insertData(@RequestBody EmployeeData data) 
	{
		service.saveData(data);
		return "Employee "+data.getFirstname()+" registered successfully";
	}
	
	//create api to update data in table
	@PutMapping("/update")
	@CrossOrigin
	public String updateData(@RequestBody EmployeeData data) {
		service.updateData(data);
		return "Employee "+data.getFirstname()+" updated successfully";
	}
	
	//create api to show all employees
	@GetMapping("/allemps")
	@CrossOrigin
	public Iterable<EmployeeData> showAllEmployees()
	{
		return service.showAllEmp();
	}
	
	//create api to delete record from table
	@DeleteMapping("/delete/{id}")
	@CrossOrigin
	public Iterable<EmployeeData> deleteEmployee(@PathVariable int id)
	{
		return service.deleteEmp(id);
	}
	
	//create api to search record in table
		@GetMapping("/search/{id}")
		@CrossOrigin
		public Optional<EmployeeData> search(@PathVariable int id) {
			return service.searchEmp(id);
		}
	
	//create api to insert score in table
	@PostMapping("/addscore")
	@CrossOrigin
	public String addscore(@RequestBody Employee_score employee_score) {
		scoreservice.savescore(employee_score);
		return "Score for Employee ID "+ employee_score.getEmpid() + " Added Successfully";
		
	}
	
	//create api to show score
	@GetMapping("/course-score")
	@CrossOrigin
	public Iterable<Employee_score> showscore(){
		return scoreservice.showscore();
	}
	
	//create api to update score in table
	@PutMapping("/updatescore")
	@CrossOrigin
	public String updateScore(@RequestBody Employee_score employee_score) {
		scoreservice.updateScore(employee_score);
		return "Score for "+employee_score.getEmpid()+"updated successfully";
	}
	
	
	
		//create api to search record in table
		@GetMapping("/score/{id}")
		@CrossOrigin
		public Optional<Employee_score> Score(@PathVariable int id) {
			return scoreservice.findScore(id);
		}
		
		
		//create api to insert admin details in admin_details table
		@PostMapping("/insertadmin")
		@CrossOrigin
		public String insertAdmin(@RequestBody AdminDetails data) {
			adminservice.saveAdminData(data);
			return "Admin "+data.getFirstname()+" registered successfully";
		}

		//create api to authenticate admin using adminId and password
		@GetMapping("/login/{id}/{password}")
		@CrossOrigin
		public String authenticateAdmin(@PathVariable int id,@PathVariable String password)
		{
			if(adminservice.authenticateAdminData(id,password))
				return "Admin details found";
			return "Admin details not found";
		}
}
