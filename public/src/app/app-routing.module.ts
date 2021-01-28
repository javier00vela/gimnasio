import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './templates/admin/admin.component';
import { CiudadComponent } from './templates/admin/components/ciudad/ciudad.component';
import { IndexComponent } from './templates/admin/components/index/index.component';
import { SedeComponent } from './templates/admin/components/sede/sede.component';
import { UsuarioComponent } from './templates/admin/components/usuario/usuario.component';
import { LoginComponent } from './templates/login/login.component';

const routes: Routes = [
  {
    path : '' , redirectTo : "admin" , pathMatch: 'full'
  },
  { 
    path: "login", component: LoginComponent
  },
  {
    path: "admin", component: AdminComponent , canActivate : [AuthGuard] , 
    children: [
      { path: '', component: IndexComponent },
      { path: 'usuario', component: UsuarioComponent },
      { path: 'sede', component: SedeComponent },
      { path: 'ciudad', component: CiudadComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
