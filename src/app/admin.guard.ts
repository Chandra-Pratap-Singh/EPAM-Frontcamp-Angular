import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userSevice: UserService, private router: Router) {}
  canActivate(): boolean{
    if(this.userSevice.user.loginAs==="admin")
      return true;
    else
    {
      this.router.navigateByUrl('news');
    }
  }
}
