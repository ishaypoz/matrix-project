import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, StoreModule.forRoot({})],
      declarations: [ IndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call getCompanyData() method', () => {
    spyOn(component, 'getCompanyData');

    let button = fixture.debugElement.nativeElement.querySelector('#test-btn');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.getCompanyData).toHaveBeenCalled();
    });
  });
});
