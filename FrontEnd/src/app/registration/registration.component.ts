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
    password: '',
    email:''
  }
  password2:string

  onSubmit() {
    console.log(this.password2)
    console.log(this.creds.password)
    if(this.creds.password === this.password2){
    this._authService.handleReg(this.creds);
    // if (!this._authService.isAuthenticated()){
    console.log('password match')
    this.message=''
    // }
  }else{
      this.message='Invalid username or password'
    }

  }


  onSelectBack() {
    this.router.navigate(['login']);
  }
}
