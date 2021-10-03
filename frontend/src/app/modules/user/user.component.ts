import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProcessService } from 'src/app/services/processing/process.service';

@Component(
  {
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.sass']
  }
)

export class UserComponent implements OnInit
{
  public user!: User;
  public panelOpenState: boolean = false;

  constructor(
    private processService: ProcessService, 
    private activatedRoute: ActivatedRoute, 
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void
  {
    this.user = this.activatedRoute.snapshot.data['user']
    setTimeout(() => this.processService.setLoading(false), 1)
  }

  logout(): void
  {
    this.authService.logout().subscribe(
      () => {
        console.log('logged out');
        this.router.navigate(['/'])
      }
    )
  }

}
