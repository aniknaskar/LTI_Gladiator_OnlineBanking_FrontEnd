import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-benificiary',
  templateUrl: './add-benificiary.component.html',
  styleUrls: ['./add-benificiary.component.css']
})
export class AddBenificiaryComponent implements OnInit {

  benificiaryForm:FormGroup;
  submitted : boolean = false;
  customerName:string;
  constructor(private fb:FormBuilder,private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.customerName=localStorage.getItem("customerName");
       this.benificiaryForm=  this.fb.group({
        beneficiaryName:['',Validators.required],
        beneficiaryAccountNumber:['',Validators.required],
        beneficiaryConfirmAccountNumber:['',Validators.required],
        beneficiaryNickName:['',Validators.required]
   });
  }

  addBenificiary(){
    alert("beneficiary added");
    this.submitted = true;

    if(this.benificiaryForm.invalid){
      return;
    }
    this.userService.addBenificiaryAccount(this.benificiaryForm.value)
      .subscribe( data => {
        this.router.navigate(['after-login']);
      });
  }

  logout(){
    this.router.navigate(['home-page']);

    if(localStorage.getItem("customerName")!=null)
    {
      localStorage.removeItem("customerName");
    }
    if(localStorage.getItem("accountBalance")!=null)
    {
      localStorage.removeItem("accountBalance");
    }
    if(localStorage.getItem("accountNumber")!=null)
    {
      localStorage.removeItem("accountNumber");
    }
    if(localStorage.getItem("internetBankingId")!=null)
    {
      localStorage.removeItem("internetBankingId");
    }
  }
}
