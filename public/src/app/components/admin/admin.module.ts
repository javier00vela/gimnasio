import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
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
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  exports : [
    AdminHeaderComponent,
    AdminSidebarComponent
  ]
})
export class AdminComponentsModule { }
