import { Component, OnInit } from "@angular/core";
import { UserService } from '../user.service';

@Component({
  selector: "app-header-section-three",
  templateUrl: "./header-section-three.component.html",
  styleUrls: ["./header-section-three.component.css"]
})
export class HeaderSectionThreeComponent implements OnInit {
  constructor(private userService: UserService) {}
  userDetails: {"loginAs":string ,"id":string ,"password":string ,"login":boolean};
  ngOnInit() {
    this.userDetails=this.userService.getUser();
  }
  checkAccess(){
    this.userDetails=this.userService.getUser();
    return this.userDetails.loginAs==="admin";
  }
}
