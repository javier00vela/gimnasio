import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminComponentsModule } from 'src/app/components/admin/admin.module';
import {MatButtonModule } from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { SedeComponent } from './components/sede/sede.component';
import { UsuarioComponent } from './components/usuario/usuario.component';


export const routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AdminComponent,
    IndexComponent,
    CiudadComponent,
    SedeComponent,
    UsuarioComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    FlexLayoutModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    AdminComponentsModule
  ],
  exports : [
    AdminComponent
  ],
  providers :[
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminModule { }
