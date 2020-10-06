import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customer-account-summary',
  templateUrl: './customer-account-summary.component.html',
  styleUrls: ['./customer-account-summary.component.css']
})
export class CustomerAccountSummaryComponent implements OnInit {

  customerName:string;
  accountNumber:string;
  accountBalance:number;
  constructor(private router: Router,private service:UserService) { }

  ngOnInit(): void {

    this.customerName=localStorage.getItem("customerName");
    this.accountNumber=localStorage.getItem("accountNumber");
    this.service.getAccountBalance().subscribe(data=>
      {
        this.accountBalance=data;
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
