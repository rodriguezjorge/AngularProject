import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {ExpensesListComponent} from './expenses-list/expenses-list.component'
import {ExpensesAddComponent} from './expenses-add/expenses-add.component'
import {ExpensesEditComponent} from './expenses-edit/expenses-edit.component'
import {ExpensesDeleteComponent} from './expenses-delete/expenses-delete.component'
import {PiechartComponent} from './piechart/piechart.component'
import {RegistrationComponent} from './registration/registration.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ExpensesListComponent },
  { path: 'new', component: ExpensesAddComponent },
  { path: 'edit/:id', component: ExpensesEditComponent },
  { path: 'delete/:id', component: ExpensesDeleteComponent },
  { path: 'graph', component: PiechartComponent },
  { path: 'registration', component: RegistrationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
