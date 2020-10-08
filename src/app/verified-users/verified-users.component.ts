import { UserService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { userInfo, userVerifiedInfo } from './../userModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verified-users',
  templateUrl: './verified-users.component.html',
  styleUrls: ['./verified-users.component.css']
})
export class VerifiedUsersComponent implements OnInit {

  userData:  userInfo[];
  submitted: boolean = false;
  registerForm:FormGroup; 
  
  constructor(private router: Router, private userService: UserService, private http: HttpClient) { }

  ngOnInit(){
    this.userService.getVerifiedUsers()
    .subscribe(data=> {
      this.userData = data;
    });

  }
  
}