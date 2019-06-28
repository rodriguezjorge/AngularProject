import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { RegisterComponent } from './register/register.component';
import {GetService} from './get.service'
import {AuthService} from './login/auth.service'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExpensesListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    GetService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
