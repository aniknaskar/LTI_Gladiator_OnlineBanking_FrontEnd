import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import  jsPDF from 'jspdf' ;
import 'jspdf-autotable'; 

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
 
  dateOfPayment:string;

  head = [['Transaction ID', 'Mode Of Payment', 'Amount', 'To Account','dateOfPayment']]
  data=[]
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
    
    this.dateOfPayment=localStorage.getItem("dateOfPayment");

    this.data= [this.transactionId, this.modeOfPayment, this.amount, this.beneficiaryAccountNumber,this.dateOfPayment]
  
    
  }

  createPdf() {

    

    var doc = new jsPDF();
  
    doc.setFontSize(18);
    doc.text('Transaction Details :', 24, 14);
    doc.setFontSize(11);
    doc.setTextColor(100);
  
  
    (doc as any).autoTable({
       head: this.head,
      body: this.data,
      theme: 'plain',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })
  
    // below line for Open PDF document in new tab
    doc.output('dataurlnewwindow')
  
    // below line for Download PDF document  
    doc.save('DigiSeva.pdf');
  }
     
  
  }

