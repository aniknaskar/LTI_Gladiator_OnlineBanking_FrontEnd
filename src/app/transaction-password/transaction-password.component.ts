import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';
// import { Otp } from '../otpModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-transaction-password',
  templateUrl: './transaction-password.component.html',
  styleUrls: ['./transaction-password.component.css']
})
export class TransactionPasswordComponent implements OnInit {

  transactionPasswordForm: FormGroup;
  submitted: boolean = false;
  invalidVerify: boolean = false;
  transaction: Transaction
  transactionId:number;
  ;
  // getOtp: Otp;
  constructor(private formBuilder: FormBuilder, private router: Router, private service: UserService,) { }


  ngOnInit(): void {
    this.transaction=new Transaction();
    this.transactionPasswordForm = this.formBuilder.group({

      transactionPassword: ['', Validators.required]
      

    });

    // let amt:string=localStorage.getItem("amount");
    // this.transaction.amount = amt;
    // console.log(this.transaction.amount);
    // console.log(localStorage.getItem("amount"))
  
    
  }

  onSubmit() {
    this.submitted = true;

    if (this.transactionPasswordForm.controls.transactionPassword.value == localStorage.getItem("transactionPassword"))
     {

      alert("Inside on submit"+localStorage.getItem("modeOfTransaction"))
      this.transaction.modeOfTransaction=localStorage.getItem("modeOfTransaction");
      // this.transaction.dateOfPayment=localStorage.getItem("dateOfPayment")
      this.transaction.amount=localStorage.getItem("amount");
      this.transaction.beneficiaryAccountNumber=localStorage.getItem("beneficiaryAccountNumber");
      this.transaction.customerAccountNumber=localStorage.getItem("accountNumber");
      this.service.transactionProcess(this.transaction).subscribe(data =>
      {
          if(data!=0)
          {
            localStorage.setItem("transactionId",data.toString());
            this.router.navigate(['transaction-successful']);
          }
      });
      
      //  alert("Successfully registered");
    }

    else{
      this.invalidVerify=true;
    }


    // alert(localStorage.getItem("accountNumber"));
    // this.submitted = true;
    // if (this.transactionPasswordForm.invalid) {
    //   return;
    // }






    // let internetBankingId: string = this.transactionPasswordForm.controls.userId.value;
    // if (this.transactionPasswordForm.controls.otp.value == localStorage.getItem("otp")) {
    //   this.service.unlockAccount(internetBankingId).subscribe(data => {
    //     localStorage.removeItem("otp");  
    //     this.router.navigate(['home-page']);
    //   }

    //   );
    // }






    // // this.service.getUserByInternetBankingId(internetBankId).subscribe(data =>{
    //   this.getOtp=data;

    //   alert(JSON.stringify(this.getOtp));
    //   alert(JSON.stringify(this.otpForm.controls.otp.value));

    //   if(this.otpForm.controls.userId.value== this.getOtp.internetBankingId && this.otpForm.controls.Otp.value== this.getOtp.otp && localStorage.getItem("accountNo")!=null){
    //     localStorage.removeItem("accountNo");  
    //    this.router.navigate(['register-internet']);
    //   }

    //   else
    //     this.invalidVerify = true;
    // });



  }


}