import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Beneficiary } from '../benificiary';
import { UserService } from '../user.service';

@Component({
  selector: 'app-saved-payments',
  templateUrl: './saved-payments.component.html',
  styleUrls: ['./saved-payments.component.css']
})
export class SavedPaymentsComponent implements OnInit {

  saveTransferForm:FormGroup;
  customerName:string;
  beneficiaries:Beneficiary[];
  constructor(private fb:FormBuilder,private router: Router,private service:UserService) { }

  ngOnInit(): void {

    this.service.viewBeneficiary().subscribe(data=>
      {
        this.beneficiaries=data;
      });

    this.customerName=localStorage.getItem("customerName");
         this.saveTransferForm=  this.fb.group({
          customerAccountNumber:[],
          beneficiaryAccountNumber:['',Validators.required],
       amount:['',Validators.required],
        remark:[],
       dateOfPayment:['',Validators.required]
       
     });
  }
    saveTransferThroughNEFT(){
      // this.router.navigate(['transaction-password'])
      // alert("Payment Successful");

      if(this.saveTransferForm.invalid){
        alert("Fill the required fields")
        return;
      }
      
      else{
      alert("payment saved")
      
      localStorage.setItem("modeOfTransaction","NEFT");
      this.service.savePayments(this.saveTransferForm.value).subscribe(data=>
        {
           alert("Payment is saved");
           this.router.navigate(['customer-dashboard'])

          

        });

      } 

    }

    // ok1(){
    //   this.router.navigate(['customer-dashboard'])
    // }

    saveTransferThroughIMPS(){
      // this.router.navigate(['transaction-password'])
      // alert("Payment Successful")

      if(this.saveTransferForm.invalid){
        alert("Fill the required fields")
        return;
      }

      else{
      alert("payment saved")

      localStorage.setItem("modeOfTransaction","IMPS");
      this.service.savePayments(this.saveTransferForm.value).subscribe(data=>
        {
          alert("Payment is saved");
          this.router.navigate(['customer-dashboard'])

        });

      }  
    }

    saveTransferThroughRTGS(){
      // this.router.navigate(['transaction-password'])
      // alert("Payment Successful")

      if(this.saveTransferForm.invalid){
        alert("Fill the required fields")
        return;
      }

      else{
      alert("payment saved")

      localStorage.setItem("modeOfTransaction","RTGS");

      this.service.savePayments(this.saveTransferForm.value).subscribe(data=>
        {
          alert("Payment is saved");
          this.router.navigate(['customer-dashboard'])

        });

      }  
    }

    addBenificiary(){
      this.router.navigate(['add-benificiary']);
    }

    logout(){
      this.router.navigate(['home-page']);

    }

    
}