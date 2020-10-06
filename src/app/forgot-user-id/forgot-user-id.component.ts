import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-user-id',
  templateUrl: './forgot-user-id.component.html',
  styleUrls: ['./forgot-user-id.component.css']
})
export class ForgotUserIdComponent implements OnInit {

  forgotUserIdForm:FormGroup;
  forgotPasswordOtpForm:FormGroup;
  submitted:boolean=false;
  submitted2:boolean=false;
  flag:number=0;
  accountNumber:string;
  otp:string;
  
  constructor(private fb:FormBuilder,private router:Router,private service: UserService) {
    
   }

  ngOnInit(): void {
    
    this.forgotUserIdForm = this.fb.group({
        
    accountNumber: ['', Validators.required ] 
     
    

     
  });
  this.forgotPasswordOtpForm = this.fb.group({
        
    
    otp:['', Validators.required]
    

     
  });
    
  }

  onSubmit(){
    this.submitted= true;
    if(this.forgotUserIdForm.controls.accountNumber.errors)
    this.flag=0;
    else
    this.flag=1;
    this.accountNumber=this.forgotUserIdForm.controls.accountNumber.value;
    this.service.forgotInternetBankingId(this.accountNumber).subscribe(data=>
      {
        this.otp=data;
      }
    );

  }
 
  onSubmit2(){
    this.submitted2= true;
     

     if(!(this.forgotPasswordOtpForm.controls.otp.errors))
     {
       if(this.forgotPasswordOtpForm.controls.otp.value==this.otp)
       {
         this.service.sendInternetBankingId(this.accountNumber).subscribe(data=>
          {
            this.router.navigate(['customer-login']);
          });
       }
     }
     
  }

}
