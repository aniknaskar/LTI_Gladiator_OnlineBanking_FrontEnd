import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Otp } from '../otpModel';
@Component({
  selector: 'app-otp-registration',
  templateUrl: './otp-registration.component.html',
  styleUrls: ['./otp-registration.component.css']
})
export class OtpRegistrationComponent implements OnInit {

  otpForm: FormGroup;
  submitted: boolean = false;
  invalidVerify: boolean = false;
  getOtp: Otp;
  constructor(private formBuilder: FormBuilder, private router: Router, private service: UserService) { }

  ngOnInit(): void {
    this.otpForm = this.formBuilder.group({

      userId: ['', Validators.required],
      otp: ['', Validators.required]

    });

    
  }

  onSubmit() {
    //  alert("Successfully registered");
    alert(localStorage.getItem("accountNumber"));
    this.submitted = true;
    if (this.otpForm.invalid) {
      return;
    }

    let internetBankingId: string = this.otpForm.controls.userId.value;
    if (this.otpForm.controls.otp.value == localStorage.getItem("otp")) {
      this.service.unlockAccount(internetBankingId).subscribe(data => {
        localStorage.removeItem("otp");  
        this.router.navigate(['home-page']);
      }

      );
    }
    // this.service.getUserByInternetBankingId(internetBankId).subscribe(data =>{
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
