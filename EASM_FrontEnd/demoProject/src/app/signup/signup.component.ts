import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEmployeeServiceService } from '../add-employee-service.service';
import { adminDetails } from '../adminDetails';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  adminData :  adminDetails = new adminDetails(null,"","","","")
  message: any
  Signupform = new FormGroup({
    adminId: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    emailId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  constructor(private service:AddEmployeeServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  get admin(){
    return this.Signupform.get('adminId') as FormControl
  }

  public registerAdmin(){
    let response=this.service.addAdmin(this.adminData)
    response.subscribe(msg=>{
      this.message=msg
      alert(this.message)
    })
  }
  public authenticateAdmin(){
    this.router.navigateByUrl('/login')
  }

}