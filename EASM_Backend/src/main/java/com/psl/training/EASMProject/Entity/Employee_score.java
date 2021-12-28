package com.psl.training.EASMProject.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "Assessment_score")
public class Employee_score {
	@Id
	private int empid;
	private int java;
	private int spring;
	private int python;
	private int javascript;
	private int datastructure;
	
	public Employee_score(){}
	
	public Employee_score(int empid, int java, int spring, int python, int javascript, int datastructure){
		super();
		this.empid = empid;
		this.java = java;
		this.spring = spring;
		this.python = python;
		this.javascript = javascript;
		this.datastructure = datastructure;
		
		
		
		
	}

	

	public int getEmpid() {
		return empid;
	}

	public void setEmpid(int empid) {
		this.empid = empid;
	}

	public int getJava() {
		return java;
	}

	public void setJava(int java) {
		this.java = java;
	}

	public int getSpring() {
		return spring;
	}

	public void setSpring(int spring) {
		this.spring = spring;
	}

	public int getPython() {
		return python;
	}

	public void setPython(int python) {
		this.python = python;
	}

	public int getJavascript() {
		return javascript;
	}

	public void setJavascript(int javascript) {
		this.javascript = javascript;
	}

	public int getDatastructure() {
		return datastructure;
	}

	public void setDatastructure(int datastructure) {
		this.datastructure = datastructure;
	}
	
	
	@Override
	public String toString() {
		return "Employee_score [empid=" + empid + ", java=" + java + ", spring=" + spring + ", python=" + python
				+ ", javascript=" + javascript + ", datastructure=" + datastructure + "]";
	}

}
