import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beneficiary } from '../benificiary';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-view-beneficiary',
  templateUrl: './view-beneficiary.component.html',
  styleUrls: ['./view-beneficiary.component.css']
})
export class ViewBeneficiaryComponent implements OnInit {
  
  beneficiaries:Beneficiary[];
  customerName:string;

  constructor(private router:Router,private service:UserService) { }

  ngOnInit(): void {

    this.customerName=localStorage.getItem("customerName");
  

  this.service.viewBeneficiary().subscribe(data=>
    {
      this.beneficiaries=data;
    })

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
