import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEmployeeServiceService } from '../add-employee-service.service';
import { AuthServiceService } from '../auth-service.service';
import { EditEmployeeService } from '../edit-employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:any
  adminId:any
  loginform = new FormGroup({
    adminId : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  password:string=""
  constructor(private service:AddEmployeeServiceService,private route:Router,private currentuserobj:EditEmployeeService) { }

  ngOnInit(): void {
  }

  get admin(){
    return this.loginform.get('adminId') as FormControl
  }
  
  public authenticateNow(){
    let response=this.service.authenticateAdmin(this.adminId,this.password)
    response.subscribe(msg=>{
      this.message=msg
      if(this.message == "Admin details found"){
        alert("Admin with id "+this.adminId+" logged in successfully")
        this.currentuserobj.setCurrentUserId(this.adminId)
        this.route.navigate(['/registerEmp'])

      }
      else{
        alert("Admin details not found")
      }
    })
  }
}