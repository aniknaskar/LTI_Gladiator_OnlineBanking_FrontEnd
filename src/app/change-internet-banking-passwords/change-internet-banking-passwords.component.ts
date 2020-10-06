import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-internet-banking-passwords',
  templateUrl: './change-internet-banking-passwords.component.html',
  styleUrls: ['./change-internet-banking-passwords.component.css']
})
export class ChangeInternetBankingPasswordsComponent implements OnInit {

  customerName:string;
  changeLoginPasswordForm:FormGroup;
  changeTransactionPasswordForm:FormGroup;

  constructor(private fb:FormBuilder,private router: Router,private userservice:UserService) { }

  ngOnInit(): void {

    this.customerName=localStorage.getItem("customerName");
     this.changeLoginPasswordForm=  this.fb.group({
      loginPassword:['',Validators.required],
      confirmLoginPassword:['',Validators.required]
       
     });

     this.changeTransactionPasswordForm=  this.fb.group({
      transactionPassword:['',Validators.required],
      confirmTransactionPassword:['',Validators.required]
       
     });
  }

  loginPass(){
    alert("login password Changed");
    if(this.changeLoginPasswordForm.invalid)
    {
      return;
    }
    else
    {
      this.userservice.changeLoginPassword(this.changeLoginPasswordForm.value).subscribe(data=>
        {
          this.router.navigate(['home-page']);
        });
    }
    
  }

  transactionPass(){

    
    alert("transacion password Changed");

    if(this.changeTransactionPasswordForm.invalid)
    {
      return;
    }

    else{
      this.userservice.changeTransactionPassword(this.changeTransactionPasswordForm.value).subscribe(data=>
        {
          this.router.navigate(['home-page']);
        });
    }
  }

 


  logout(){
    this.router.navigate(['home-page']);
    if(localStorage.getItem("customerName")!=null)
    {
      localStorage.removeItem("customerName");
    }
    if(localStorage.getItem("accountBalance")!=null)
    {
      localStorage.removeItem("accountBalance");
    }
    if(localStorage.getItem("accountNumber")!=null)
    {
      localStorage.removeItem("accountNumber");
    }
    if(localStorage.getItem("internetBankingId")!=null)
    {
      localStorage.removeItem("internetBankingId");
    }

  }

}
