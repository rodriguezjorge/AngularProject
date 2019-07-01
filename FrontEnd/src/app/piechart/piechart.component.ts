import { Component, OnInit } from '@angular/core';
import { GetService } from './../get.service';
import {Router} from "@angular/router"
import {AuthService} from '../login/auth.service'

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  public expenses = [];
  public errorMsg;

  public year=2019;


  public pieChartLabels = [];
  // public pieChartData = [120, 150, 180, 90];
  public pieChartData = []
  public pieChartType = 'pie';


  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartData = []



  childExpenses= JSON.parse(localStorage.getItem('parentExpenses'));

  constructor(private _getService: GetService,
    private router: Router,
    private _authService: AuthService) {  }

  ngOnInit() {

    var amount = []
    var date = []
    var barra=[]
    // console.log(this.year)
    this.childExpenses.forEach(function(arrayItem) {
      // console.log(arrayItem)
      var x = arrayItem.amount;
      var y = arrayItem.date;
      var z = {data: x, label: 'price'};
      // var z = {data: x, label: 'price'};
      // var z = {data: [x], label: y};
      console.log(new Date(y).getMonth())

      if (new Date(y).getFullYear() == 2019){
        amount.push(x);
        barra.push(z);
      }

      date.push(new Date(y).getFullYear());

    })

    this.pieChartData = amount;
    this.pieChartLabels= date;
    this.barChartData = barra;
  }

  onSelectBack() {
    this.router.navigate(['list']);
  }

  onSelectLogout() {
    this._authService.logout()
    this.router.navigate(['login']);
  }

  saverange(){
    console.log(this.year)
  }
}
