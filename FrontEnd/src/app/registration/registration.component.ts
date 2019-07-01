import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { GetService } from './../get.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router,private _getService: GetService) { }

  ngOnInit() {
  }


  onSelectBack() {
    this.router.navigate(['login']);
  }
}
