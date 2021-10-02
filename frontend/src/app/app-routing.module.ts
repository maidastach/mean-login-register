import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = 
[
  {
    path: '',
    loadChildren: () => import('./modules/auth/home.module').then(m => m.HomeModule), //homeModule
    canLoad: [AuthGuard],
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
