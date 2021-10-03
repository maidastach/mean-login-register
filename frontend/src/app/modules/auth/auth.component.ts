import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthResponse, Login, Register } from 'src/app/Models';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProcessService } from 'src/app/services/processing/process.service';
import { DialogDataComponent } from './components/dialog-data/dialog-data.component';


@Component(
  {
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
  }
)

export class AuthComponent implements OnInit
{
  public loading!: boolean;

  public login!: FormGroup;
  public register!: FormGroup;

  public divStyle: string = '0%'

  // @ViewChild('loginForm') loginForm: any;
  // @ViewChild('loginText') loginText: any;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router, 
    public dialog: MatDialog, 
    private processService: ProcessService
  ) { }

  ngOnInit(): void
  {
    setTimeout(() => this.processService.setLoading(false), 1)

    this.login = this.fb.group(
      {
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required]]
      }
    )

    this.register = this.fb.group(
      {
        user: ['', [Validators.required, Validators.minLength(3)]],
        fname: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        re_password: ['', [Validators.required, Validators.minLength(8)]],
        isAdmin: [false]
      }
    )

  }

  swapToSignIn(): void
  {
    this.divStyle = "0%"
    // console.log(this.loginForm, this.loginText);
    
    // this.loginForm.style.marginLeft = "0%";
    // this.loginText.style.marginLeft = "0%";
  }

  swapToSignUp(): void
  {
    this.divStyle = "-50%"

    // console.log(this.loginForm, this.loginText);

    // this.loginForm.style.marginLeft = "-50%";
    // this.loginText.style.marginLeft = "-50%";
  }

  swapFormView(event: any): void
  {
    event.target.parentElement.parentElement.parentElement.classList.toggle('s--signup');
  }

  handleLogin(form: Login)
  {
    this.loading = true
    const dialogRef = this.dialog.open(DialogDataComponent, { data: [this.loading] });
    this.authService
      .login(form)
        .subscribe(
          (response: AuthResponse) => 
          {
            this.loading = false;
            dialogRef.close()
            this.processService.setSuccessMsg(`Bentornato ${response.response}`)
            this.router.navigate([`/${response.flag}`])
          },
          (error: ErrorEvent) =>
          {
            dialogRef.close()
            this.loading = false;
            this.processService.setErroMsg(error.error.message)
            if(!error.error.success && error.error.flag)
            {
              this.login.controls[error.error.flag].setErrors({ 'incorrect': true })
              this.login.controls[error.error.flag].markAsTouched({ onlySelf: true })
            }
          }
        )
  }


  handleRegister(form: Register)
  {
    this.loading = true;
    const dialogRef = this.dialog.open(DialogDataComponent, { data: [this.loading] });
    const { re_password: remove, ...user } = form
    this.authService
      .register(user)
        .subscribe(
          (response: AuthResponse) =>
          {
            this.loading = false;
            dialogRef.close()
            this.router.navigate([`/${response.flag}`])
          },
          (error: ErrorEvent) => 
          {
            dialogRef.close()
            this.loading = false;
            this.processService.setErroMsg(error.error.message)
            if(error.error.flag)
            {
              this.register.controls[error.error.flag].setErrors({ 'incorrect': true })
              this.register.controls[error.error.flag].markAsTouched({ onlySelf: true })
            }
          }
        )
  }

}
