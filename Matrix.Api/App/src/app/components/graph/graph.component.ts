import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseChartDirective } from 'ng2-charts';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { CompanyData } from 'src/app/models/models';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  isShowCompanyGraph:boolean = false;

  public chart = {
    "datasets": [
      { "data": [], "label": "Amazon", "type": "line","backgroundColor": "transparent", "borderColor": "green", "pointBackgroundColor": "green", "pointBorderColor": "green" },
      { "data": [],"label": "Microsoft", "type": "bubble","backgroundColor": "red" },
      { "data": [], "label": "Google", "backgroundColor": "#03a9f4" , "pointBorderColor":"transparent"}
    ],
    "labels": []
  };

  
  constructor(private store: Store<AppState>) {
    store.select('company').subscribe(companyList => {
      if(companyList.length > 0){
        this.setGraph(companyList)
        this.isShowCompanyGraph = true;
      } else {
        this.isShowCompanyGraph = false;
        this.chart.datasets[0].data = [];
        this.chart.datasets[1].data = [];
        this.chart.datasets[2].data = [];
      }
    })
   }

  ngOnInit(): void {
  }

  setGraph(companyList:CompanyData[]){
    try {
      companyList.forEach((company) => {
        switch(company.companyName){
          case 'Amazon': {
            let months: string[] = [];
            let employees: number[] = []
            company.table.forEach((data)=> {
              months.push(data.month);
              employees.push(data.employees);
              
            })
            this.chart.labels = [...months];
            this.chart.datasets[0].data = [...employees];
            break;
          }
          case 'Microsoft': {
            let months: string[] = [];
            let employees = []
            company.table.forEach((data)=> {
              months.push(data.month);
              employees.push({x: 2, y: data.employees, r: 7});
            })
            this.chart.labels = [...months];
            this.chart.datasets[1].data = [...employees];
            break;
          }
          case 'Google': {
            let months: string[] = [];
            let employees: number[] = []
            company.table.forEach((data)=> {
              months.push(data.month);
              employees.push(data.employees);
              
            })
            this.chart.labels = [...months];
            this.chart.datasets[2].data = [...employees];
            break;
          }
          default:{
            break;
          }
        }
      })
    } catch(error) {
      console.log(error);
    }
  }

}
