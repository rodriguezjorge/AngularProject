import { Component, OnInit } from '@angular/core';
import {GetService} from './../get.service';
@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  public expenses = [];
  public errorMsg;
  constructor(private _getService: GetService) { }

  ngOnInit() {
    this._getService.getExpenses().subscribe(
      (data) => this.expenses = data,
      (error) => this.errorMsg = error
      );
  }

}
