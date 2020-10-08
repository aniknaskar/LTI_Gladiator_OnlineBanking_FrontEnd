import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';
import { TransactionResponse } from '../transactionresponse';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  transactions:Transaction[];
  customerName:string;
  accountNumber:string;
  accountBalance:number;
  result:TransactionResponse;
  constructor(private router: Router,private service:UserService) { }

  ngOnInit(): void {

    this.customerName=localStorage.getItem("customerName");
    this.accountNumber=localStorage.getItem("accountNumber");
    this.service.getAccountBalance().subscribe(data=>
      {
        this.accountBalance=data;
      })

      this.service.viewSavedPayment().subscribe(data=>
        {
          this.transactions=data;
        }
      )

  }

  paySavedPayment(trans:Transaction)
  {
    
    this.service.deleteSavedPayment(trans).subscribe(data=>
      {
        
        localStorage.setItem("beneficiaryAccountNumber",trans.beneficiaryAccountNumber);
        localStorage.setItem("modeOfTransaction",trans.modeOfTransaction);
        localStorage.setItem("amount",trans.amount);
        

        this.service.checkTransaction(trans).subscribe(data => {
          this.result = data;
          if (this.result.response == "OK") {
            
            this.router.navigate(['transaction-password']);
          }
          else if (this.result.response == "INSUFFICIENT ACCOUNT BALANCE") {
            alert(this.result.response);
          }
          else {
            
    
            alert(this.result.response);
          }
    
        });
        







      })
  }



  logout(){
    this.router.navigate(['home-page']);

  }
}
