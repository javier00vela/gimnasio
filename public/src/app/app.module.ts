import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolPipe } from './pipes/rol.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './interceptors/http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './templates/admin/admin.component';
import { AdminModule } from './templates/admin/admin.module';
import { LoginComponent } from './templates/login/login.component';
import { LoginModule } from './templates/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    RolPipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    LoginModule,
    AdminModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
