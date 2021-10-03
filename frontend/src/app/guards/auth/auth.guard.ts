import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthResponse } from 'src/app/Models';
import { ProcessService } from 'src/app/services/processing/process.service';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanLoad 
{
  constructor(private authService: AuthService, private router: Router, private processService: ProcessService) {}

  canLoad(route: Route): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    const location: string = `/${route.path}`
    console.log('canLoad AuthGuard', route.path);

    return this.authService
      .isLogged()
        .pipe(
          map(
            res => this.handleRedirect(res, location)
          )
        )
  }

  handleRedirect(response: AuthResponse, location: string): boolean
  {
    if(location === '/')
      return (response.success) ? this.goUser() : true
    else
      return (!response.success) ? this.goHome() : true;
  }

  goHome(): boolean
  {
    this.router.navigate(['/'])
    return false;
  }

  goUser(): boolean
  {
    this.router.navigate(['/user'])
    return false;
  }
  
}

