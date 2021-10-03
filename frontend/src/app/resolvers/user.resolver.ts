import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserResponse, User } from "../Models";
import { UserService } from "../services/user/user.service";


@Injectable({ providedIn: 'root' })

export class UserResolver implements Resolve<User>
{
    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User
    {
        console.log('User Resolver', route.params);

        return this.userService
          .getUser()
            .pipe(
                map(
                    (res: UserResponse) => res.response
                )
            )
    }
}