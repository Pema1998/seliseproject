import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import {MatDialog} from '@angular/material/dialog';
import { DetailComponent } from './pages/detail/detail.component';
import { RaiseComponent } from './raise/raise.component';
export interface SalaryData {
  name: string;
  position: number;
  allowances: number;
  PF: string;
  Total: number;
  Action: any;
}
const ELEMENT_DATA: SalaryData[] = [
  {position: 1, name: 'Tsheten Dorji', allowances: 1000, PF: '10%', Total: 25000,Action: ''},
  {position: 2, name: 'Kezang Dorji', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 3, name: 'Thinley Namgyel', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 4, name: 'Pema Thinley', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 5, name: 'Jigme Namgyel', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 6, name: 'Ugyen Dorji', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 7, name: 'Pema Drodil', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 8, name: 'Tashi Dhendhup', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 9, name: 'Dorji Nima', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 10, name: 'Tandin Dorji', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
];

const ELEMENT_DATA1: SalaryData[] = [
  {position: 1, name: 'Tsheten Dorji', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 2, name: 'Kezang Dorji', allowances: 1000, PF: '10%', Total: 25000 , Action: ''},
  {position: 3, name: 'Dorji Nima', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 4, name: 'Tandin Dorji', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
];

const ELEMENT_DATA2: SalaryData[] = [
  {position: 1, name: 'Thinley Namgyel', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 2, name: 'Pema Thinley', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 3, name: 'Jigme Namgyel', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 4, name: 'Ugyen Dorji', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 5, name: 'Pema Drodil', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
  {position: 6, name: 'Tashi Dhendhup', allowances: 1000, PF: '10%', Total: 25000, Action: ''},
 ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selected = 'none';
  title = 'selise-project';
  place = 'thimphu';
  salaryDetailTable = false;
  HardwareButton = false;
  showAll = false;
  showHLR = false;
  showHLNR = false;
  none = true;
  dataChart: Object;
  chartConfig: any;  


  redirect(event: any){
    console.log(event.value);
    let options = event.value;
    if(options == "salary"){
      this.salaryDetailTable = true;
      this.HardwareButton = false;
      this.none = false;

    } else if(options == "hardware"){
      this.HardwareButton = true;
      this.salaryDetailTable = false;
      this.none = false;

    } else {
      this.none = true;
      this.salaryDetailTable = false;
      this.HardwareButton = false;

    }
  }

  displayedColumns: string[] = ['position', 'name', 'allowances', 'PF', 'Total','Action'];
  displayedColumns1: string[] = ['position', 'name', 'allowances', 'PF', 'Total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClickAll(){
    this.showAll = true;
    this.showHLR = false;
    this.showHLNR = false;
  }

  onClickHLR(){
    this.showHLR = true;
    this.showAll = false;
    this.showHLNR = false;

  }

  onClickHLNR(){
    this.showHLNR = true;
    this.showAll = false;
    this.showHLR = false;

  }
  constructor(public dialog: MatDialog) {
    this.chartConfig = {
      width: '700',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
  };

  this.dataChart = {
      "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
      },
      "data": [{
        "label": "Venezuela",
        "value": "290"
      }, {
        "label": "Saudi",
        "value": "260"
      }, {
        "label": "Canada",
        "value": "180"
      }, {
        "label": "Iran",
        "value": "140"
      }, {
        "label": "Russia",
        "value": "115"
      }, {
        "label": "UAE",
        "value": "100"
      }, {
        "label": "US",
        "value": "30"
      }, {
        "label": "China",
        "value": "30"
      }]
    };

  }
  onClickPay(){
    const dialogRef = this.dialog.open(DetailComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onClickRaise(){
    const dialogRef = this.dialog.open(RaiseComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

