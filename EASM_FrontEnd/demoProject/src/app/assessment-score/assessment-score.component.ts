import { AddEmployeeServiceService } from './../add-employee-service.service';
import { Component, OnInit } from '@angular/core';
import { EditEmployeeService } from '../edit-employee.service';
import { Router } from '@angular/router';
import { EmployeeScore } from '../EmployeeScore';
@Component({
  selector: 'app-assessment-score',
  templateUrl: './assessment-score.component.html',
  styleUrls: ['./assessment-score.component.css']
})
export class AssessmentScoreComponent implements OnInit {
  emps: any
  
  constructor(private service:AddEmployeeServiceService,private router:Router, private edit: EditEmployeeService) { }

  ngOnInit(): void {
    let response=this.service.ShowScore()
    response.subscribe(score=>this.emps=score)
  }

  public updateScore(emps:EmployeeScore)
  {
    this.edit.updateScoreRecord(emps)
    this.router.navigateByUrl('/updatescore')
  }

}