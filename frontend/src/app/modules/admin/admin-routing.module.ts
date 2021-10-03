import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminResolver } from 'src/app/resolvers/admin.resolver';
import { UserResolver } from 'src/app/resolvers/user.resolver';
import { AdminComponent } from './admin.component';


const routes: Routes = 
[
  {
    path: '',
    component: AdminComponent,
    resolve: { user: UserResolver, users: AdminResolver }
  }
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

export class AdminRoutingModule { }
