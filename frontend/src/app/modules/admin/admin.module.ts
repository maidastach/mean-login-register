import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule(
  {
    declarations: 
      [
        AdminComponent
      ],
    imports: 
      [
        CommonModule,
        AdminRoutingModule,
        AngularMaterialModule
      ]
  }
)

export class AdminModule { }
