import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDetails={loginAs:"",id:"",password:"",login:true}
  constructor(private router: Router, private userDetails: UserService) { }
  ngOnInit() {
    this.userDetails.reset();
  }

  login(){
    if(this.loginDetails.id=="0000" && this.loginDetails.password=="0000")
    {
      this.userDetails.setUser(this.loginDetails);
      this.router.navigateByUrl('news');
    }
    else
      alert("incorrect-credentials");
  }

}
