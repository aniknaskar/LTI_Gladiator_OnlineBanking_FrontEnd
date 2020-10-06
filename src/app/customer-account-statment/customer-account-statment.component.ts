import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-customer-account-statment',
  templateUrl: './customer-account-statment.component.html',
  styleUrls: ['./customer-account-statment.component.css']
})
export class CustomerAccountStatmentComponent implements OnInit {

  customerName:string;
  statementForm:FormGroup;
  constructor(private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {

    this.customerName=localStorage.getItem("customerName");
    this.statementForm=  this.fb.group({
      startDate:['',Validators.required],
      endDate:['',Validators.required]
       
    });
  }

   showStatement(){
     alert("Statement displayed");
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
