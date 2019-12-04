import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginDetails = { loginAs: "", id: "", password: "", login: true };
  user: { loginAs: string; id: string; login: boolean };

  constructor(private router: Router, private userDetails: UserService) {}

  ngOnInit() {
    this.userDetails.reset();
  }

  login() {
    if (
      this.loginDetails.id == "0000" &&
      this.loginDetails.password == "0000"
    ) {
      this.user = {
        loginAs: this.loginDetails.loginAs,
        id: this.loginDetails.id,
        login: this.loginDetails.login
      };
      this.userDetails.setUser(this.user);
      this.router.navigateByUrl("news");
    } else alert("incorrect-credentials");
  }
}
