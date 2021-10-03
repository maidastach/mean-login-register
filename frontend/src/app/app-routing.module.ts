import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin/admin.guard';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = 
[
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    canLoad: [AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    canLoad: [AdminGuard],
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canLoad: [AdminGuard],
    pathMatch: 'full'
  }
];

@NgModule(
  {
    imports: 
      [
        RouterModule.forRoot(routes)
      ],
    exports: 
      [
        RouterModule
      ]
  }
)

export class AppRoutingModule { }
