import { UserService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { userInfo, userVerifiedInfo } from './../userModel';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-account-requests',
  templateUrl: './new-account-requests.component.html',
  styleUrls: ['./new-account-requests.component.css']
})
export class NewAccountRequestsComponent implements OnInit {
  userData:  userInfo[];
  submitted: boolean = false;
  registerForm:FormGroup; 
  public adminobj = new userVerifiedInfo();
  constructor(private router: Router, private userService: UserService, private http: HttpClient) { }

  ngOnInit(){
    this.userService.getUsers()
    .subscribe(data=> {
      this.userData = data;
    });

  }
  
  sendAdminRemarks(index){
    this.adminobj.title = this.userData[index].title;
    this.adminobj.firstName = this.userData[index].firstName;
    this.adminobj.middleName = this.userData[index].middleName;
    this.adminobj.lastName = this.userData[index].lastName;
    this.adminobj.fatherName = this.userData[index].fatherName;
    this.adminobj.dob = this.userData[index].dob;
    this.adminobj.permanentAddressLine1 = this.userData[index].permanentAddressLine1;
    this.adminobj.permanentAddressLine2 = this.userData[index].permanentAddressLine2;
    this.adminobj.permanentLandmark = this.userData[index].permanentLandmark;
    this.adminobj.permanentState = this.userData[index].permanentState;
    this.adminobj.permanentCity = this.userData[index].permanentCity;
    this.adminobj.permanentPin = this.userData[index].permanentPin;
    this.adminobj.residentialAddressLine1 = this.userData[index].residentialAddressLine1;
    this.adminobj.residentialAddressLine2 = this.userData[index].residentialAddressLine2;
    this.adminobj.residentialLandmark = this.userData[index].residentialLandmark;
    this.adminobj.residentialState = this.userData[index].residentialState;
    this.adminobj.residentialCity = this.userData[index].residentialCity;
    this.adminobj.residentialPin = this.userData[index].residentialPin;
    this.adminobj.occupationType= this.userData[index].occupationType;
    this.adminobj.sourceOfIncome = this.userData[index].sourceOfIncome;
    this.adminobj.grossAnnualIncome = this.userData[index].grossAnnualIncome;
    this.adminobj.emailId = this.userData[index].emailId;
    this.adminobj.mobileNumber = this.userData[index].mobileNumber;
    this.adminobj.aadharNumber = this.userData[index].aadharNumber;
    this.adminobj.panNumber = this.userData[index].panNumber;
    this.adminobj.serviceRefNumber = this.userData[index].serviceRefNumber;
    this.adminobj.verifyStatus = this.userData[index].verifyStatus;
    

     console.log(this.adminobj)
    this.userService.postUserInfo(this.adminobj).subscribe(
      data => {console.log(data)
      })

      this.router.navigate(['account-requests']);
  }  

}