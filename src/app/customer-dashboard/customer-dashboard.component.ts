import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

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

  }
}
