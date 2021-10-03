import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthResponse } from 'src/app/Models';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({ providedIn: 'root' })

export class AdminGuard implements CanLoad
{
  constructor(private authService: AuthService, private router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    console.log('Admin Guard');

    const location = route.path;

    console.log(location);
    

    return this.authService
      .isAdmin()
        .pipe(
          map(
            (res: AuthResponse) => {
              if(location === 'user')
                return res.success ? this.goAdmin() : true
              else
                return res.success ? true : this.goUser()
            }
          )
        )
  }

  goAdmin(): boolean
  {
    this.router.navigate(['/admin'])
    return false;
  }

  goUser(): boolean
  {
    this.router.navigate(['/user'])
    return false;
  }
}
