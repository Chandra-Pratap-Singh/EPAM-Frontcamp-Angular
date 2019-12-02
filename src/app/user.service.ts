import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService {
  user = { loginAs: "", id: "", password: "", login: false };

  constructor(private router: Router) {}

  getUser() {
    return this.user;
  }

  setUser(value) {
    this.user.loginAs = value.loginAs;
    this.user.id = value.id;
    this.user.password = value.password;
    this.user.login = true;
  }

  getLoginStatus() {
    return this.user.login;
  }

  logout() {
    this.setUser({ loginAs: "", id: "", password: "", login: false });
    this.router.navigateByUrl("");
  }
}
