import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  fundTransferForm: FormGroup;
  customerName: string;

  constructor(private fb: FormBuilder, private router: Router, private service: UserService) { }

  ngOnInit(): void {

    this.customerName = localStorage.getItem("customerName");
    this.fundTransferForm = this.fb.group({
      customerAccountNumber: ['', Validators.required],
      beneficiaryAccountNumber: ['', Validators.required],
      amount: ['', Validators.required],
      remark: ['', Validators.required],
      dateOfPayment: ['', Validators.required]

    });
  }
  transferThroughNEFT() {

    alert("Payment Successful");


    this.service.checkTransaction(this.fundTransferForm.value).subscribe(data => {
      let result = data;
      if (result == 0) {
        alert("Beneficiary Doesn't exist");
      }
      else if (result == 1) {
        alert("Insufficient Balance");
      }
      else {
        localStorage.setItem("modeOfTransaction", "NEFT");

        //alert("At"+localStorage.getItem("modeOfTransaction"))
        localStorage.setItem("amount", this.fundTransferForm.controls.amount.value);
        console.log(localStorage.getItem("amount"))
        localStorage.setItem("beneficiaryAccountNumber", this.fundTransferForm.controls.beneficiaryAccountNumber.value);
        localStorage.setItem("dateOfPayment", this.fundTransferForm.controls.dateOfPayment.value);
        localStorage.setItem("remarks",this.fundTransferForm.controls.remark.value)
        this.router.navigate(['transaction-password']);

      }


    });

    


  }

  transferThroughIMPS() {

    // alert("Payment Successful")


    this.service.checkTransaction(this.fundTransferForm.value).subscribe(data => {
      let result = data;
      alert(result);
      if (result == 0) {
        alert("Beneficiary Doesn't exist");
      }
      else if (result == 1) {
        alert("Insufficient Balance");
      }
      else {
        localStorage.setItem("modeOfTransaction", "IMPS");
        localStorage.setItem("amount", this.fundTransferForm.controls.amount.value);
        localStorage.setItem("beneficiaryAccountNumber", this.fundTransferForm.controls.beneficiaryAccountNumber.value);
        localStorage.setItem("dateOfPayment", this.fundTransferForm.controls.dateOfPayment.value);
        this.router.navigate(['transaction-password']);

        alert(localStorage.getItem("amount"));
      }

    });


  }

  transferThroughRTGS() {

    // alert("Payment Successful")



    this.service.checkTransaction(this.fundTransferForm.value).subscribe(data => {
      let result = data;
      if (result == 0) {
        alert("Beneficiary Doesn't exist");
      }
      else if (result == 1) {
        alert("Insufficient Balance");
      }
      else {
        localStorage.setItem("modeOfTransaction", "RTGS");
        localStorage.setItem("amount", this.fundTransferForm.controls.amount.value);
        localStorage.setItem("beneficiaryAccountNumber", this.fundTransferForm.controls.beneficiaryAccountNumber.value);
        localStorage.setItem("dateOfPayment", this.fundTransferForm.controls.dateOfPayment.value);
        this.router.navigate(['transaction-password']);
      }

    });


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
