import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedDirective } from './shared.directive';
import { ModelsComponent } from './shared/models/models.component';
import { AccountComponent } from './shared/models/account/account.component';
import { HeaderComponent } from './shared/components/header/header/header.component';
import { TableComponent } from './shared/components/table/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    SharedDirective,
    ModelsComponent,
    AccountComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ 
      AuthGuard,
    { provide: APP_BASE_HREF, useValue: '/login' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }],],
  bootstrap: [AppComponent]
})
export class AppModule { }

