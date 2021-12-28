import { AddEmployeeServiceService } from './../add-employee-service.service';
import { Component, OnInit } from '@angular/core';
import { EditEmployeeService } from '../edit-employee.service';
import { EmployeeScore } from '../EmployeeScore';
@Component({
  selector: 'app-update-score',
  templateUrl: './update-score.component.html',
  styleUrls: ['./update-score.component.css']
})
export class UpdateScoreComponent implements OnInit {
  score: EmployeeScore = new EmployeeScore(0,0,0,0,0,0)
  message: any
  constructor(private edit:EditEmployeeService, private service: AddEmployeeServiceService) { }

  ngOnInit(): void {
    this.score=this.edit.getUpdateScoreRecord()
  }

  public updateScore()
  {
    let response=this.service.Updatescore(this.score)
    response.subscribe(msg=>{
      this.message=msg
      alert(this.message)
    })
  }

}