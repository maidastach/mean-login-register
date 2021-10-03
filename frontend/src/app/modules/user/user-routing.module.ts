import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from 'src/app/resolvers/user.resolver';
import { UserComponent } from './user.component';

const routes: Routes = 
[
  {
    path: '',
    component: UserComponent,
    resolve: { user: UserResolver }
  },
];

@NgModule(
  {
    imports: 
      [
        RouterModule.forChild(routes)
      ],
    exports: 
      [
        RouterModule
      ]
  }
)

export class UserRoutingModule { }
