import { Component, OnInit } from '@angular/core';
import { GetService } from './../get.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  public expenses = [];
  public errorMsg;
  constructor(private router: Router,private _getService: GetService) { }

  ngOnInit() {
    this._getService.getExpenses().subscribe(
      (data) =>
        // console.log(data)
        this.expenses = data
      ,
      (error) => this.errorMsg = error
    );
  }

  onSelect(expense) {
    console.log(expense)
    this.router.navigate(['/edit', expense]);
  }

}
