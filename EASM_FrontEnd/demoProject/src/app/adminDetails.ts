export class adminDetails{
    
    adminId:any
    firstname:string
    lastname:string
    emailId:string
    password:string

    constructor(adminId:any,firstname:string,lastname:string,emailId:string,password:string){
        this.adminId=adminId
        this.firstname=firstname
        this.lastname=lastname
        this.emailId=emailId
        this.password=password
    }
}