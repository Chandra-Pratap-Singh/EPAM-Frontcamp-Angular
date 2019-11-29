import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDetails={loginAs:"",id:"",password:""}
  constructor(private router: Router, private userDetails: UserService) { }
  user;
  ngOnInit() {
    this.user=this.userDetails.getUser();
  }

  login(){
    if(this.loginDetails.id=="0000" && this.loginDetails.password=="0000")
    {
      this.userDetails.setUser(this.loginDetails);
      this.router.navigateByUrl('news');
    }
  }

}
