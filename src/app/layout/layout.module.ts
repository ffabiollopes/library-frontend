import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { UserviewComponent } from './userview/userview.component';

@NgModule({
  declarations: [LayoutComponent, MainComponent, UserComponent, AdminviewComponent, UserviewComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
