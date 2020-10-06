import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-saved-payments',
  templateUrl: './saved-payments.component.html',
  styleUrls: ['./saved-payments.component.css']
})
export class SavedPaymentsComponent implements OnInit {

  saveTransferForm:FormGroup;
  customerName:string;
 
  constructor(private fb:FormBuilder,private router: Router,private service:UserService) { }

  ngOnInit(): void {

    this.customerName=localStorage.getItem("customerName");
         this.saveTransferForm=  this.fb.group({
          customerAccountNumber:['',Validators.required],
          beneficiaryAccountNumber:['',Validators.required],
       amount:['',Validators.required],
       remark:['',Validators.required],
       dateOfPayment:['',Validators.required]
       
     });
  }
    saveTransferThroughNEFT(){
      // this.router.navigate(['transaction-password'])
      // alert("Payment Successful");
      alert("payment saved")

      localStorage.setItem("modeOfTransaction","NEFT");
      this.service.savePayments(this.saveTransferForm.value).subscribe(data=>
        {
          alert("Payment is saved");
          this.router.navigate(['customer-dashboard'])

          

        });

        

    }

    saveTransferThroughIMPS(){
      // this.router.navigate(['transaction-password'])
      // alert("Payment Successful")
      alert("payment saved")

      localStorage.setItem("modeOfTransaction","IMPS");
      this.service.savePayments(this.saveTransferForm.value).subscribe(data=>
        {
          alert("Payment is saved");
          this.router.navigate(['customer-dashboard'])

        });

        
    }

    saveTransferThroughRTGS(){
      // this.router.navigate(['transaction-password'])
      // alert("Payment Successful")
      alert("payment saved")

      localStorage.setItem("modeOfTransaction","RTGS");

      this.service.savePayments(this.saveTransferForm.value).subscribe(data=>
        {
          alert("Payment is saved");
          this.router.navigate(['customer-dashboard'])

        });

        
    }

    addBenificiary(){
      this.router.navigate(['add-benificiary']);
    }

    logout(){
      this.router.navigate(['home-page']);

    }

    
}