import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from './../MustMatch';
import { UserService } from '../user.service';
import { User } from '../userModel';

@Component({
  selector: 'app-register-internet-banking',
  templateUrl: './register-internet-banking.component.html',
  styleUrls: ['./register-internet-banking.component.css']
})
export class RegisterInternetBankingComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  invalidRegister: boolean = false;
  otp: string = "";
  getAccountNo: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private service: UserService) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({

      accountNumber: ['', Validators.required],
      loginPassword: ['', Validators.required],
      confirmLoginPassword: ['', Validators.required],
      transactionPassword: ['', Validators.required],
      confirmTransactionPassword: ['', Validators.required]

    }, {
      validator: [MustMatch('loginPassword', 'confirmLoginPassword'),
      MustMatch('transactionPassword', 'confirmTransactionPassword')],

    });
  }

  onSubmit() {
    alert("Successfully registered");
    let accountNumber: string = this.registerForm.controls.accountNumber.value;
    localStorage.setItem("accountNumber", accountNumber);
    this.submitted = true;

    if (this.registerForm.invalid) {
      alert("Invalid");
      return;
    }

    else {

      this.service.createInternetBankingUser(this.registerForm.value).subscribe(
        data => {
          this.otp = data;
          localStorage.setItem("otp", this.otp);
          this.router.navigate(['otp-registration']);
        }
      );
    }
  }

  // let accountNumber: string = this.registerForm.controls.accountNumber.value;  
  // this.service.getUserByAccountNo(accountNumber).subscribe(data =>{
  //   this.getAccountNo= data; 

  //   alert(JSON.stringify(this.getAccountNo));
  //   alert(JSON.stringify(this.registerForm.controls.accountNumber.value));

  //if(this.registerForm.controls.accountNumber.value == this.getAccountNo){
  //localStorage.setItem("accountNumber",this.registerForm.controls.accountNumber.value);



  //}

  // else{
  //   this.invalidRegister=true;
  // }



  // if(this.registerForm.controls.accountNumber.value== "12345678")
  //   this.router.navigate(['otp-registration']);  //for otp

  // else
  //   this.invalidRegister = true;





  // this.router.navigate(['/home-page']);

  // this.service.createInternetBankingUser(this.registerForm.value)
  // .subscribe( data => {

  //   this.router.navigate(['/home-page']);

  // });









  home() {
    this.router.navigate(['home-page']);
  }

  newAccount() {
    this.router.navigate(['account-open']);
  }

  registerInternetBanking() {
    this.router.navigate(['register-internet']);

  }

  loginCustomer() {
    this.router.navigate(['customer-login']);

  }

  loginAdmin() {
    this.router.navigate(['admin-login']);

  }

}
