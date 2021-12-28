import { Injectable } from '@angular/core';
import { adminDetails } from './adminDetails';
import { EmployeeData } from './EmployeeData';
import { EmployeeScore } from './EmployeeScore';

@Injectable({
  providedIn: 'root'
})
export class EditEmployeeService {
  data:EmployeeData=new EmployeeData(0,"","","","","","")
  score: EmployeeScore= new EmployeeScore(0,0,0,0,0,0)
  current_user:number=0
  
  constructor() { }

  public updateRecord(emps:EmployeeData){
    this.data=emps
  }
  
  public getUpdateRecord(){
    return this.data
  }

  public updateScoreRecord(emps:EmployeeScore){
    this.score = emps
  }

  public getUpdateScoreRecord(){
    return this.score
  }


  public coursescore(emp:EmployeeScore){
    this.score = emp
  }

  public getCoursescore(){
    return this.score
  }

  //we will fetch current admin id
/*-------------------experiment----------------*/
public setCurrentUserId(adminId:number)
{
  this.current_user=adminId
}

public getCurrentUserId(){
  return this.current_user
}


/*-------------------experiment----------------*/
}


