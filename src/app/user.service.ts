import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}
  user = { loginAs: "", id: "", password: "", login: false };

  getUser() {
    return this.user;
  }

  setUser(value) {
    this.user.loginAs = value.loginAs;
    this.user.id = value.id;
    this.user.password = value.password;
    this.user.login = true;
    console.log(value);
  }
}
