import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"
import {User} from './user.models'
import { Subject } from 'rxjs';
import {_AuthService} from './auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'app';
  user = new Subject<User>();
  creds = {
    username: '',
    password: ''
  }

  constructor(private router: Router, private http: HttpClient ) {}

  onSubmit() {
    this._AuthService.handleAuth().subscribe(
      (data) => this.expenses = data,
      (error) => this.errorMsg = error
      );
    // this.http.post('http://127.0.0.1:8000/login/', this.creds)
    //   .subscribe(

    //     result => {
    //       console.log('I logged in', result)
    //       const user = new User(result['token'])
    //       console.log(user)
    //       this.user.next(user);

    //     }
    //   )
      this.router.navigate(['/list']);
  }

}
