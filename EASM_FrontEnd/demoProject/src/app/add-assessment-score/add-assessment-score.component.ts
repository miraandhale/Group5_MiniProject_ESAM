import { Component, OnInit } from '@angular/core';
import { AddEmployeeServiceService } from '../add-employee-service.service';
import { EmployeeScore } from '../EmployeeScore';
@Component({
  selector: 'app-add-assessment-score',
  templateUrl: './add-assessment-score.component.html',
  styleUrls: ['./add-assessment-score.component.css']
})
export class AddAssessmentScoreComponent implements OnInit {
  //------------------------experiment--------------------------------
  score : EmployeeScore=new EmployeeScore(null,null,null,null,null,null)
  //------------------------experiment--------------------------------
  message: any
  constructor(private service:AddEmployeeServiceService) { }

  ngOnInit(): void {
  }

  public registerCourse()
  {
    let response = this.service.addAssesmentScore(this.score)
    response.subscribe(msg=>{
      this.message=msg
      alert(this.message)
    })
  }

}