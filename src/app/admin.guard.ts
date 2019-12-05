import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(): boolean {
    if (
      this.userService.checkLocalStorage() &&
      this.userService.getLoginAs() === "admin"
    )
      return true;
    else {
      this.router.navigateByUrl("news");
      return false;
    }
  }
}
