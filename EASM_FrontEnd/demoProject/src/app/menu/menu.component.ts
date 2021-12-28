import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditEmployeeService } from '../edit-employee.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

current_user_id:any
  

  constructor(private service:EditEmployeeService,private route:Router) { }
  
  ngOnInit(): void {
    //experiment
    /* this.current_user_id=this.service.getCurrentUserId()
    console.log(this.current_user_id) */
    //experiment
  }
  public showId(){
    //experiment
    this.current_user_id=this.service.getCurrentUserId()
    /* console.log(this.current_user_id) */
    //experiment
  }
  public redirectTologin(){
    alert("Admin with Id "+this.current_user_id+" logged out successfully")
    this.current_user_id=0
    this.route.navigateByUrl('/login')
  }
}
