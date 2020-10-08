import { Dates, Transaction } from './../transaction';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {GetTransaction} from '../gettransaction';
@Component({
  selector: 'app-customer-account-statment',
  templateUrl: './customer-account-statment.component.html',
  styleUrls: ['./customer-account-statment.component.css']
})
export class CustomerAccountStatmentComponent implements OnInit {

  customerName:string;
  statementForm:FormGroup;
  submitted : boolean;
  startDate : any;
  endDate : any;
  fromDate : any;
  toDate : any;
  userData: Transaction[];
  userDates : Dates;
  getTransaction:GetTransaction;
  constructor(private fb:FormBuilder,private router: Router,private service: UserService) { }

  ngOnInit(): void {

    this.getTransaction=new GetTransaction();
    this.customerName=localStorage.getItem("customerName");
    this.service.getStatements()
    .subscribe(data=> {
      this.userData = data;
    });

    
  }

   showStatement(){
     
    
     this.submitted = true;
     this.fromDate = this.startDate;
     this.toDate = this.endDate;   
     
     this.getTransaction.accountNumber=localStorage.getItem("accountNumber");
     this.getTransaction.fromDate=this.startDate;
     this.getTransaction.toDate=this.endDate;

     this.service.getStatementsByDate(this.getTransaction).subscribe(data=>
      {
        this.userData = data;
      }
       
     );

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