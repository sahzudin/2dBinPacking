import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    const token = this.authService.getToken();

    if (!token || token.length < 1) {
      return true;
    }

    this.router.navigate(['packer']);
    return false;
  }
}
