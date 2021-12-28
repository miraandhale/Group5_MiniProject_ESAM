import { Component, OnInit } from '@angular/core';
import { AddEmployeeServiceService } from '../add-employee-service.service';
import { EditEmployeeService } from '../edit-employee.service';
import { EmployeeData } from '../EmployeeData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  data:EmployeeData=new EmployeeData(0,"","","","","","")
  message:any
  constructor(private edit:EditEmployeeService,private service:AddEmployeeServiceService, private route:Router) { }

  ngOnInit(): void {
    this.data=this.edit.getUpdateRecord()
  }
  public updateNow()
  {
    let response=this.service.updateEmployee(this.data)
    response.subscribe(msg=>{
      this.message=msg
      alert(this.message)
      this.route.navigate(['/allemps'])
    })
  }
}
