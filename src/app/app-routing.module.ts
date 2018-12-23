import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [
   //para definir a landing page
  {path: '', redirectTo: 'login',pathMatch: 'full'},
   //para definir que é um module e que tem um routing próprio
  {path: '', loadChildren: './layout/layout.module#LayoutModule'},
  //rota dos componentes
  {path: 'login',    component: LoginComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: '**',       redirectTo: 'not-found'}];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
