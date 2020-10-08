import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {


  customerName:string;
  accountNumber:string;
  accountBalance:number;

  constructor(private router: Router,private service:UserService) { }

  ngOnInit(): void {
    
    if(localStorage.getItem("username")!=null){
    this.router.navigate(['customer-dashboard']);
    this.accountNumber=localStorage.getItem("accountNumber");
    this.customerName=localStorage.getItem("customerName");

    this.customerName=localStorage.getItem("customerName");
    this.service.getAccountBalance().subscribe(data=>
      {
        this.accountBalance=data;
      })
    }

    else
       this.router.navigate(['session-expired']);
  
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
