import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OtpRegistrationComponent } from '../otp-registration/otp-registration.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm:FormGroup;
  forgotPasswordOtpForm:FormGroup;
  submitted:boolean=false;
  submitted2:boolean=false;
  flag:number=0;
  otp:string;
  
  constructor(private fb:FormBuilder,private router:Router,private service:UserService) {
     
   }

  ngOnInit(): void {
    
    this.forgotPasswordForm = this.fb.group({
        
    internetBankingId: ['', Validators.required ] 
     
    

     
  });

  this.forgotPasswordOtpForm = this.fb.group({
        
    
    otp:['', Validators.required]
    

     
  });

    
  }

  onSubmit(){
    this.submitted= true;
    if(this.forgotPasswordForm.controls.internetBankingId.errors)
    this.flag=0;
    else
    this.flag=1;

    let internetBankingId=this.forgotPasswordForm.controls.internetBankingId.value;
    localStorage.setItem("internetBankingId",internetBankingId);
    this.service.forgotLoginPassword(internetBankingId).subscribe(data=>
      {
        this.otp=data;
      })
     
  }
 
  onSubmit2(){
    this.submitted2= true;
     
       if(this.otp==this.forgotPasswordOtpForm.controls.otp.value)
       {
        this.router.navigate(['set-newPassword']);
       }
     
     
  }
}
