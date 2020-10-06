import { Component, OnInit } from '@angular/core';
 
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
