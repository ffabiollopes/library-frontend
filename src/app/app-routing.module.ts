import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [
  {path: 'login',    component: LoginComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: '**',       redirectTo: 'not-found'},
  {path: '', redirectTo: 'login',pathMatch: 'full'}];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
