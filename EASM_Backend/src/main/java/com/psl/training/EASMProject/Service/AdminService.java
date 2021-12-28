package com.psl.training.EASMProject.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.psl.training.EASMProject.Entity.AdminDetails;
import com.psl.training.EASMProject.Repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	AdminRepository repo;

	//insert
	public void saveAdminData(AdminDetails data) {
		// TODO Auto-generated method stub
		repo.save(data);
	}

	public boolean authenticateAdminData(int id, String password) {
		
		if(repo.existsById(id))
		{
			if(repo.existsByPassword(password))
			{
				return true;
			}
			else
				return false;
		}
		return false;
	}
}
