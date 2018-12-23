import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { UserviewComponent } from './userview/userview.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from '../shared';

@NgModule({
  declarations: [
    LayoutComponent, 
    MainComponent, 
    AdminviewComponent,
    UserviewComponent,
    ],

  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
