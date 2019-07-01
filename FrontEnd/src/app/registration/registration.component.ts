import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import {AuthService} from '../login/auth.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  constructor(private router: Router,private _authService: AuthService) { }
  message: string
  creds = {
    username: '',
    password: ''
  }

  onSubmit() {
    this._authService.handleReg(this.creds);
    if (!this._authService.isAuthenticated()){
    // console.log('Invalid username or password')
    this.message='Invalid username or password'
    }

  }


  onSelectBack() {
    this.router.navigate(['login']);
  }
}
