package com.psl.training.EASMProject.Repository;
import org.springframework.data.repository.CrudRepository;


import com.psl.training.EASMProject.Entity.AdminDetails;

public interface AdminRepository extends CrudRepository<AdminDetails, Integer> {
	//public boolean findByAdminId(int id);
		public boolean existsByPassword(String password);

}
