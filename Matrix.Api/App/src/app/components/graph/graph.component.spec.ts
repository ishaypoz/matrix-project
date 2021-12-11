import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyData } from 'src/app/models/models';

import { GraphComponent } from './graph.component';
import { StoreModule } from '@ngrx/store';

describe('GraphComponent', () => {
  let component: GraphComponent;
  let fixture: ComponentFixture<GraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({})
      ],
      declarations: [ GraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update chart company data', () => {
    let testData: CompanyData = {
      "companyName": "Google",
      "table":
       [
        {
          "month": "January",
          "employees": 3
        },
        {
          "month": "February",
          "employees": 4
        },
        {
          "month": "March",
          "employees": 5
        },
        {
          "month": "April",
          "employees": 6
        },
        {
          "month": "May",
          "employees": 7
        }
      ]
    }
    component.setGraph([testData])
    expect(component.chart.datasets[2].data).toEqual([3,4,5,6,7]);
  });

  it('should dispaly chart', () => {
    component.isShowCompanyGraph = true;
    fixture.detectChanges()
    expect(fixture.debugElement.nativeElement.querySelector('canvas')).toBeTruthy();
  });
});
