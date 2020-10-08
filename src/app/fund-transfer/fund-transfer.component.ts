import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Beneficiary } from '../benificiary';
import { TransactionResponse } from '../transactionresponse';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  fundTransferForm: FormGroup;
  customerName: string;
  result:TransactionResponse;
  beneficiaries:Beneficiary[];
  constructor(private fb: FormBuilder, private router: Router, private service: UserService) { }

  ngOnInit(): void {

    this.service.viewBeneficiary().subscribe(data=>
      {
        this.beneficiaries=data;
      });

    this.customerName = localStorage.getItem("customerName");
    this.fundTransferForm = this.fb.group({
      // customerAccountNumber: ['', Validators.required],
      beneficiaryAccountNumber: ['', Validators.required],
      amount: ['', Validators.required],
      remark: []
      

    });
  }
  transferThroughNEFT() {

    if (this.fundTransferForm.invalid) {
      alert("Fill the required Fields");
      return;
    }


    else{
  
        localStorage.setItem("modeOfTransaction", "NEFT");
        localStorage.setItem("amount", this.fundTransferForm.controls.amount.value);
        localStorage.setItem("beneficiaryAccountNumber", this.fundTransferForm.controls.beneficiaryAccountNumber.value);
        localStorage.setItem("remark", this.fundTransferForm.controls.remark.value);
        // localStorage.setItem("dateOfPayment", this.fundTransferForm.controls.dateOfPayment.value);

    this.service.checkTransaction(this.fundTransferForm.value).subscribe(data => {
      this.result = data;
      if (this.result.response == "OK") {
        
        this.router.navigate(['transaction-password']);
      }
      else if (this.result.response == "INSUFFICIENT ACCOUNT BALANCE") {
        alert(this.result.response);
      }
      else {
        

        alert(this.result.response);
      }

    });

    
  }

  }

  transferThroughIMPS() {


    if (this.fundTransferForm.invalid) {
      alert("Fill the required Fields");
      return;
    }


    else{
    // alert("Payment Successful")
        localStorage.setItem("modeOfTransaction", "IMPS");
        localStorage.setItem("amount", this.fundTransferForm.controls.amount.value);
        localStorage.setItem("beneficiaryAccountNumber", this.fundTransferForm.controls.beneficiaryAccountNumber.value);
        // localStorage.setItem("dateOfPayment", this.fundTransferForm.controls.dateOfPayment.value);

    this.service.checkTransaction(this.fundTransferForm.value).subscribe(data => {
      this.result = data;
      if (this.result.response == "OK") {
        
        this.router.navigate(['transaction-password']);
      }
      else if (this.result.response == "INSUFFICIENT ACCOUNT BALANCE") {
        alert(this.result.response);
      }
      else {
        

        alert(this.result.response);
      }

    });

  }

  }

  transferThroughRTGS() {


    if (this.fundTransferForm.invalid) {
      alert("Fill the required Fields");
      return;
    }

    // alert("Payment Successful")
    else{
        localStorage.setItem("modeOfTransaction", "RTGS");
        localStorage.setItem("amount", this.fundTransferForm.controls.amount.value);
        localStorage.setItem("beneficiaryAccountNumber", this.fundTransferForm.controls.beneficiaryAccountNumber.value);
        // localStorage.setItem("dateOfPayment", this.fundTransferForm.controls.dateOfPayment.value);

    this.service.checkTransaction(this.fundTransferForm.value).subscribe(data => {
      this.result = data;
      if (this.result.response == "OK") {
        
        this.router.navigate(['transaction-password']);
      }
      else if (this.result.response == "INSUFFICIENT ACCOUNT BALANCE") {
        alert(this.result.response);
      }
      else {
        

        alert(this.result.response);
      }

    });
   }

  }

  addBenificiary() {
    this.router.navigate(['add-benificiary']);
  }

  logout() {
    this.router.navigate(['home-page']);

  }

  save() {

    alert("payment saved");
  }
}
