import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UsersResponse, User } from "../Models";
import { UserService } from "../services/user/user.service";


@Injectable({ providedIn: 'root' })

export class AdminResolver implements Resolve<User[]>
{
    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[]
    {
        console.log('Admin Resolver');

        return this.userService
          .getUsers()
            .pipe(
                map(
                    (res: UsersResponse) => res.response
                )
            )
    }
}