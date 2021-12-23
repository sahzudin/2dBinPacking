import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    const token = this.authService.getToken();

    if (!token || token.length < 1) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
