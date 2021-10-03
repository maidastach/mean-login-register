import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule(
  {
    declarations: 
      [
        UserComponent
      ],
    imports: 
      [
        CommonModule,
        UserRoutingModule,
        AngularMaterialModule
      ]
  }
)
export class UserModule { }
