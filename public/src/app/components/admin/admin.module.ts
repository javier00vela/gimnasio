import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import {MatButtonModule } from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminSidebarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports : [
    AdminHeaderComponent,
    AdminSidebarComponent
  ]
})
export class AdminComponentsModule { }
