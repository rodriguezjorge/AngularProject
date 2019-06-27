import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'app';

  creds = {
    username: '',
    password: ''
  }

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://127.0.0.1:8000/login/', this.creds)
      .subscribe(
        result => {
          console.log('I logged in', result)
        }
      )
  }

}
