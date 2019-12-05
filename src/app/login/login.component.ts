import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService, User } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginDetails = { loginAs: "", id: "", password: "", login: true };
  // user: { loginAs: string; id: string; login: boolean };
  user: User;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService.reset();
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
      this.userService.setUser(this.user);
      this.router.navigateByUrl("news");
    } else alert("incorrect-credentials");
  }
}
