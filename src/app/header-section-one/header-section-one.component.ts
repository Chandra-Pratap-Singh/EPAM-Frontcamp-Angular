import { Component, OnInit } from "@angular/core";
import { UserService, User } from "../user.service";

@Component({
  selector: "app-header-section-one",
  templateUrl: "./header-section-one.component.html",
  styleUrls: ["./header-section-one.component.css"]
})
export class HeaderSectionOneComponent implements OnInit {
  storage = window.sessionStorage;
  user: User;
  isAdmin: boolean;
  logedIn: boolean;

  constructor(private userService: UserService) {
    this.userService.updatedUser.subscribe(value => {
      this.user = JSON.parse(this.storage.getItem("user"));
      this.isAdmin = this.user.loginAs === "admin";
      this.logedIn = this.user.login;
      console.log(this.user);
    });
  }

  ngOnInit() {
    this.user = this.storage.getItem("user")
      ? JSON.parse(this.storage.getItem("user"))
      : { loginAs: "", id: "", login: false };
    this.isAdmin = this.storage.getItem("user")
      ? this.user.loginAs === "admin"
      : false;
    this.logedIn = this.storage.getItem("user") ? this.user.login : false;
  }

  logout() {
    this.userService.logout();
  }
}
