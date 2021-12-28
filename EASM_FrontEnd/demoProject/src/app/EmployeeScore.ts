export class EmployeeScore{
    empid:any;
	java:any;
    spring:any;
	python:any;
	javascript:any;
	datastructure:any;


    constructor( empid:any,
        java:any,
        spring:any,
        python:any,
        javascript:any,
        datastructure:any,
    ){

        this.empid = empid;
        this.java = java;
        this.spring = spring;
        this.python = python;
        this.javascript = javascript;
        this.datastructure = datastructure
    }
}
