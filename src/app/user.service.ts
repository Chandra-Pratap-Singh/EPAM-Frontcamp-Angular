import { Injectable, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { SESSION_STORAGE, WebStorageService } from "angular-webstorage-service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private router: Router
  ) {}

  user = { loginAs: "", id: "", login: false };

  getUser() {
    return this.user;
  }

  setUser(value) {
    this.user.loginAs = value.loginAs;
    this.user.id = value.id;
    this.user.login = value.login;
    this.storage.set("user", this.user);
  }

  checkLocalStorage(): boolean {
    return this.storage.get("user") != null;
  }

  getLoginStatus() {
    return this.storage.get("user").login;
  }

  getLoginAs() {
    return this.storage.get("user").loginAs;
  }

  getUserId() {
    return this.storage.get("user").id;
  }

  reset() {
    this.setUser({ loginAs: "", id: "", login: false });
  }

  logout() {
    this.reset();
    this.router.navigateByUrl("");
  }
}
