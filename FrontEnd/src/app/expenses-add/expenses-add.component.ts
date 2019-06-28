import { Component } from '@angular/core';
import { GetService } from './../get.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-expenses-add',
  templateUrl: './expenses-add.component.html',
  styleUrls: ['./expenses-add.component.css']
})
export class ExpensesAddComponent {

  submitted = false;

  public expenses = [];
  public errorMsg;

  constructor(private router: Router,private _getService: GetService) { }



  onSubmit(expensesForm) {
    console.log(expensesForm);
    this.submitted = true;
    this._getService.postExpenses(expensesForm).subscribe(
    );
    this.router.navigate(['/list']);


  }

}
