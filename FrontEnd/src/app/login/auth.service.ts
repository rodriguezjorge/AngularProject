import { Injectable } from '@angular/core';
import {User} from './user.models'
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  title = 'app';
  user = new Subject<User>();
  creds = {
    username: '',
    password: ''
  }

  constructor(private http: HttpClient) {}

    private handleAuth(token:string){
    this.http.post('http://127.0.0.1:8000/login/', this.creds)
      .subscribe(

        result => {
          console.log('I logged in', result)
          const user = new User(result['token'])
          console.log(user)
          this.user.next(user);
        }
}