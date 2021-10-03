import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProcessService } from 'src/app/services/processing/process.service';

@Component(
  {
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.sass']
  }
)

export class AdminComponent implements OnInit
{
  public user!: User;
  public users!: User[];
  public panelOpenState: boolean = false;

  constructor(
    private processService: ProcessService, 
    private activatedRoute: ActivatedRoute, 
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    console.log('admin path');
    
    this.user = this.activatedRoute.snapshot.data['user']
    this.users = this.activatedRoute.snapshot.data['users']
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
