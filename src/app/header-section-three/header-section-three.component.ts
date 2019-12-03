import { Component, OnInit } from "@angular/core";
import { UserService } from '../user.service';

@Component({
  selector: "app-header-section-three",
  templateUrl: "./header-section-three.component.html",
  styleUrls: ["./header-section-three.component.css"]
})
export class HeaderSectionThreeComponent implements OnInit {
  constructor(private userService: UserService) {}
  user: {"loginAs":string ,"id":string,"login":boolean};
  ngOnInit() {
    this.user=this.userService.getUser();
  }
  checkAccess(){
    return this.userService.getLoginAs() ==="admin";
  }
}
