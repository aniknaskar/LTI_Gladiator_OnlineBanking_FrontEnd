import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { User } from '../userModel';
import { UserService } from '../user.service';
@Component({
  selector: 'app-account-open',
  templateUrl: './account-open.component.html',
  styleUrls: ['./account-open.component.css']
})
export class AccountOpenComponent implements OnInit {

  newAccountForm: FormGroup;
  users: User;
  
  submitted: boolean = false;
  permanentAddressLine1:string;
  residentialAddressLine1:string;
  constructor(private formBuilder: FormBuilder,private router: Router,private service:UserService) { }

  ngOnInit(): void {
    this.newAccountForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      fatherName: ['', Validators.required],
      dob: ['', Validators.required],
      permanentAddressLine1: ['', Validators.required],
      permanentAddressLine2: ['', Validators.required],
      permanentLandmark: ['', Validators.required],
      permanentState: ['', Validators.required],
      permanentCity: ['', Validators.required],
      permanentPin: ['', Validators.required],
      residentialAddressLine1: ['', Validators.required],
      residentialAddressLine2: ['', Validators.required],
      residentialLandmark: ['', Validators.required],
      residentialState: ['', Validators.required],
      residentialCity: ['', Validators.required],
      residentialPin: ['', Validators.required],
      occupationType: ['', Validators.required],
      sourceOfIncome: ['', Validators.required],
      grossAnnualIncome: ['', Validators.required],
      emailId: ['', Validators.required ],
      mobileNumber: ['', Validators.required],
      aadharNumber: ['', Validators.required],
      panNumber:['',Validators.required]
    });
  }

  addUser(){
    //alert("FormSubmtted");
    this.submitted = true;
    if (this.newAccountForm.invalid) {
      alert("Fill the required Fields");
      return;
    }
    this.service.createNewUser(this.newAccountForm.value).subscribe(
      data => {
        this.router.navigate(['home-page']);
      }
    );
  }

  // home(){
  //   this.router.navigate(['home-page']);
  // }

  // newAccount(){
  //   this.router.navigate(['account-open']);
  // }

  // registerInternetBanking(){
  //   this.router.navigate(['register-internet']);

  // }
  
  // loginCustomer(){
  //   this.router.navigate(['customer-login']);

  // }

  // loginAdmin(){
  //   this.router.navigate(['admin-login']);

  // }

   
       
}
 
