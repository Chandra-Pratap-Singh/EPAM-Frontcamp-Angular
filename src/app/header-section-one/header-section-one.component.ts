import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-header-section-one",
  templateUrl: "./header-section-one.component.html",
  styleUrls: ["./header-section-one.component.css"]
})
export class HeaderSectionOneComponent implements OnInit {
  user: any;

  constructor(private userDetails: UserService) {}

  ngOnInit() {
    this.user = this.userDetails.getUser();
    this.userDetails.activeUser.subscribe(value => {
      this.user = value;
    });
  }

  logout() {
    this.userDetails.logout();
  }

  checkLoginStatus(): boolean {
    return this.user.login;
  }
}
