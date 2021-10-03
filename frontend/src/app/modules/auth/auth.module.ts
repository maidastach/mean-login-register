import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { AuthComponent } from './auth.component';
import { DialogDataComponent } from './components/dialog-data/dialog-data.component';

import { AuthGuard } from 'src/app/guards/auth/auth.guard';


@NgModule(
  {
    declarations: 
      [
        AuthComponent,
        DialogDataComponent
      ],
    imports: 
      [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
      ],
    providers: [ AuthGuard ]
  }
)

export class AuthModule { }
