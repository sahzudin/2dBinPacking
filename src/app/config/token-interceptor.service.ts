import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { NotificationsService } from '../services/notifications.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationsService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    })

    return next.handle(request).pipe(
      catchError(err => this.handleAuthError(err))
    );
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
        localStorage.removeItem('auth-token')
        localStorage.removeItem('auth-user')
        this.router.navigate(['']);
        this.notificationService.showError("Pristup nije dozvoljen")
        return of(err.message);
    }
      return throwError(err);
  }

}
