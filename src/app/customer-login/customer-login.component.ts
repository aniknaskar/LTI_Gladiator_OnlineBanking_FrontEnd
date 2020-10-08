import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../loginModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  customerLoginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  login: Login;
  counter: number;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: UserService) { }

  ngOnInit(): void {

    this.customerLoginForm = this.formBuilder.group({

      internetBankingId: ['', Validators.required],
      loginPassword: ['', Validators.required]



    });
  }

  onSubmit() {
    this.submitted = true;
    //this.router.navigate(['after-login']);
    if (this.customerLoginForm.invalid) {
      return;
    }

    let loginId: string = this.customerLoginForm.controls.internetBankingId.value;

    this.service.getUsersById(loginId).subscribe(data => {

      this.login = data;

      if (this.login.internetBankingId == "NULL") {
        alert("Invaid Internet Banking Id")
      }
      if (this.login.internetBankingId == "LOCKED") {
        alert("Account is Locked")
      }
      else {

        localStorage.setItem("customerName", this.login.customerName);
        localStorage.setItem("internetBankingId", this.login.internetBankingId);
        localStorage.setItem("accountBalance", this.login.accountBalance);
        localStorage.setItem("transactionPassword", this.login.transactionPassword);
        localStorage.setItem("internetBankingId", this.login.internetBankingId);
        localStorage.setItem("accountNumber", this.login.accountNumber);
        if (this.customerLoginForm.controls.loginPassword.value == this.login.loginPassword) {

          localStorage.removeItem(this.login.accountNumber);
          this.router.navigate(['after-login']);

        }
        else {
          this.invalidLogin = true;
          if (localStorage.getItem(this.login.accountNumber) == null) {
            localStorage.removeItem(this.login.accountNumber);
            localStorage.setItem(this.login.accountNumber, "1")
            alert("Incorrect Password !! Only 2 more chances left to login");
          }
          else if (localStorage.getItem(this.login.accountNumber) != null) {
            if (localStorage.getItem(this.login.accountNumber) == "1") {
              localStorage.setItem(this.login.accountNumber, "11")
              alert("Incorrect Password !! Only 1 more chances left to login");
            }
            else if (localStorage.getItem(this.login.accountNumber) == "11") {
              alert("No more chances left... Your account Is Locked")
              
              this.service.lockAccount().subscribe(data=>{
                localStorage.removeItem(this.login.accountNumber);
              });
            }
          }


        }
      }


    });


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

  afterLogin() {
    this.router.navigate(['after-login']);

  }



}
