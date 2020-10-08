import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../MustMatch';
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
         beneficiaryNickName:[]
   }, {
    validator: [MustMatch('beneficiaryAccountNumber', 'beneficiaryConfirmAccountNumber')],

  });
  }

  addBenificiary(){
    

    // localStorage.setItem("benificiaryName",this.benificiaryForm.controls.benificiaryName.value);
    // localStorage.setItem("beneficiaryAccountNumber",this.benificiaryForm.controls.beneficiaryAccountNumber.value);
    // localStorage.setItem("beneficiaryNickName",this.benificiaryForm.controls.beneficiaryNickName.value);

    this.submitted = true;

    if(this.benificiaryForm.invalid){
      alert("Fill the required fields")
      return;
    }
    else
    {
    this.userService.addBenificiaryAccount(this.benificiaryForm.value)
      .subscribe( data => 
        {
          alert("beneficiary added");
        this.router.navigate(['view-beneficiary']);
      });
    }
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
