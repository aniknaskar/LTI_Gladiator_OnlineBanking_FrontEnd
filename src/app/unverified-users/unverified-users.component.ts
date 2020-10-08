import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { userInfo } from '../userModel';

@Component({
  selector: 'app-unverified-users',
  templateUrl: './unverified-users.component.html',
  styleUrls: ['./unverified-users.component.css']
})
export class UnverifiedUsersComponent implements OnInit {

  userData:  userInfo[];
  
  submitted: boolean = false;
  registerForm:FormGroup; 
  
  constructor(private router: Router, private userService: UserService, private http: HttpClient) { }

  ngOnInit(){
    this.userService.getUnVerifiedUsers()
    .subscribe(data=> {
      this.userData = data;
    });

  }
  
}