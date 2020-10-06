import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../MustMatch';
import { UserService } from '../user.service';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent implements OnInit {
  setNewPasswordForm:FormGroup;
  submitted:boolean=false;
  
  constructor(private fb:FormBuilder,private router:Router,private service:UserService) {
     
   }

  ngOnInit(): void {
    
    this.setNewPasswordForm = this.fb.group({
        
     
      loginPassword:['', Validators.required],
      confirmLoginPassword:['', Validators.required],
 
      
    }, {
      validator: [MustMatch('loginPassword', 'confirmLoginPassword') ],
      
      });
    
  }

  onSubmit(){
    this.submitted= true;

    if(!(this.setNewPasswordForm.controls.loginPassword.errors) && !(this.setNewPasswordForm.controls.confirmLoginPassword.errors))
    {

      this.service.changeLoginPassword(this.setNewPasswordForm.value).subscribe(data=>
        {
          alert("password changed successfully");
          if(localStorage.getItem("internetBankingId")!=null)
          {
            localStorage.removeItem("internetBankingId");
          }
          this.router.navigate(['home-page']);
        }
        );
  
    } 
  
  }
 
}