import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from './../MustMatch';
import { UserService } from '../user.service';
import { User } from '../userModel';
import { OTP } from '../otp';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-register-internet-banking',
  templateUrl: './register-internet-banking.component.html',
  styleUrls: ['./register-internet-banking.component.css']
})
export class RegisterInternetBankingComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  invalidRegister: boolean = false;
  otp: OTP;
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
          alert(this.otp.otp);
          if (this.otp.otp == "ACCOUNT NUMBER DOESN'T EXIST") {
            alert(this.otp.otp);
          }
          else if (this.otp.otp == "ALREADY REGISTERED") {
            alert(this.otp.otp);
          }
          else if(this.otp.otp!=null) {
            localStorage.setItem("otp", this.otp.otp);
            localStorage.setItem("internetBankingId",this.otp.internetBankingId);
            this.router.navigate(['otp-registration']);
          }
        }
      );
    }
  }

 





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
