import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpErrorInterceptorService } from './services/interceptors/httpError-interceptor.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { AdminGuard } from './guards/admin/admin.guard';

@NgModule(
  {
    declarations: 
      [
        AppComponent,
      ],
    imports: 
      [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatProgressBarModule
      ],
    providers: 
      [
        AuthGuard,
        AdminGuard,
        {
          provide: HTTP_INTERCEPTORS,
          multi: true,
          useClass: HttpErrorInterceptorService
        }
      ],
    bootstrap: 
      [
        AppComponent
      ]
  }
)

export class AppModule { }
