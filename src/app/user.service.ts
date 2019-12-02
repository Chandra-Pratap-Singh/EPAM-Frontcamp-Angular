import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  activeUser = new Subject<any>();
  user = { loginAs: "", id: "", password: "", login: false };

  constructor(private router: Router) {}

  getUser() {
    return this.user;
  }

  setUser(value) {
    this.user.loginAs = value.loginAs;
    this.user.id = value.id;
    this.user.password = value.password;
    this.user.login = value.login;
    this.activeUser.next(this.user);
  }

  getLoginStatus() {
    return this.user.login;
  }

  reset() {
    this.setUser({ loginAs: "", id: "", password: "", login: false });
    this.activeUser.next(this.user);
  }

  logout() {
    this.reset();
    this.activeUser.next(this.user);
    this.router.navigateByUrl("");
  }
}
