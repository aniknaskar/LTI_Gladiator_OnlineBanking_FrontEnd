import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-transaction-successful',
  templateUrl: './transaction-successful.component.html',
  styleUrls: ['./transaction-successful.component.css']
})
export class TransactionSuccessfulComponent implements OnInit {

  transactionId:string;
  amount:string;
  modeOfPayment:string;
  beneficiaryAccountNumber:string;
  remarks:string;
  
  public now: Date = new Date();
  
  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
}

  ngOnInit(): void {
    
    this.transactionId=localStorage.getItem("transactionId");
    this.amount=localStorage.getItem("amount");
    this.modeOfPayment=localStorage.getItem("modeOfTransaction");
    this.beneficiaryAccountNumber=localStorage.getItem("beneficiaryAccountNumber");
    this.remarks=localStorage.getItem("remarks");
 
  
    
  }

 
  
     
  
}

