import { Component } from '@angular/core';

import {Router} from "@angular/router"

import {AuthService} from './auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds = {
    username: '',
    password: ''
  }

  constructor(private router: Router,private _authService: AuthService ) {}

  onSubmit() {
    this._authService.handleAuth(this.creds)
    // .subscribe(
    //   (data) => this.expenses = data,
    //   (error) => this.errorMsg = error
    //   );

      this.router.navigate(['/list']);
  }
  onSelectRegistration() {
    this.router.navigate(['registration']);
  }


}
