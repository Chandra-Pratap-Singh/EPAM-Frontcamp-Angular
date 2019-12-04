import { Injectable, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

export interface User {
  loginAs: string;
  id: string;
  login: boolean;
}

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: User = { loginAs: "", id: "", login: false };
  updatedUser = new Subject<any>();
  storage = window.sessionStorage;
  constructor(private router: Router) {}

  getUser() {
    return this.user;
  }

  setUser(value) {
    this.user = { loginAs: value.loginAs, id: value.id, login: value.login };
    this.storage.setItem("user", JSON.stringify(this.user));
    this.updatedUser.next(this.user);
  }

  checkLocalStorage(): boolean {
    return JSON.parse(this.storage.getItem("user")) != null;
  }

  getLoginStatus() {
    return JSON.parse(this.storage.getItem("user")).login;
  }

  getLoginAs() {
    return JSON.parse(this.storage.getItem("user")).loginAs;
  }

  getUserId() {
    return JSON.parse(this.storage.getItem("user")).id;
  }

  reset() {
    this.setUser({ loginAs: "", id: "", login: false });
  }

  logout() {
    this.reset();
    this.storage.clear();
    this.router.navigateByUrl("");
  }
}
