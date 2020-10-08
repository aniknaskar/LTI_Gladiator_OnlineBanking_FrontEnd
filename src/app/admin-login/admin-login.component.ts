import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Login } from '../loginModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm:FormGroup; 
  submitted: boolean = false;
  loginpass:Login;
  constructor(private formBuilder: FormBuilder,private router: Router,private service:UserService) { }

  ngOnInit(): void {

    this.adminLoginForm = this.formBuilder.group({
        
      adminId: ['', Validators.required ],
      adminPassword:['', Validators.required]
      
 
       
    });
  }
 
  onSubmit(){
   
    
    let id:string=this.adminLoginForm.controls.adminId.value;
    this.service.getAdminById(id).subscribe(data => 
      {

        this.loginpass = data;   
      
        if (this.adminLoginForm.controls.adminPassword.value == this.loginpass.loginPassword) {
          
          this.router.navigate(['account-requests']);
        }
        else {
          this.submitted=false;
        }
  
    });
  
  }
  home(){
    this.router.navigate(['home-page']);
  }

  newAccount(){
    this.router.navigate(['account-open']);
  }

  registerInternetBanking(){
    this.router.navigate(['register-internet']);

  }
  
  loginCustomer(){
    this.router.navigate(['customer-login']);

  }

  loginAdmin(){
    this.router.navigate(['admin-login']);

  }

  
 
}
