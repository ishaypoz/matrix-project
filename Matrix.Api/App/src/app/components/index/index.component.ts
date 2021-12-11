import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddCompanyData, ResetCompanyData } from 'src/app/actions/company.actions';
import { AppState } from 'src/app/app.state';
import { CompanyData, ResponseModel } from 'src/app/models/models';
import { MatrixService } from 'src/app/services/matrix.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent{

  constructor(public matrixService: MatrixService, private store: Store<AppState>) { }

  resetCompanyData(){
    try {
      this.store.dispatch(ResetCompanyData({payload: null}));
    } catch(error) {
      console.log(error);
    }
  }

  getCompanyData(companyName: string){
    try {
      switch(companyName){
        case 'Google': {
          this.matrixService.fetchGoogleEmployees().subscribe((serverResponse: ResponseModel) => {
            if(serverResponse.success){
              let companyData: CompanyData = { companyName:'Google', table: JSON.parse(serverResponse.responseJson) };
              this.store.dispatch(AddCompanyData({payload: companyData}));
            }
          });
          break;
        }

        case 'Amazon': {
          this.matrixService.fetchAmazonEmployees().subscribe((serverResponse: ResponseModel) => {
            if(serverResponse.success){
              let companyData: CompanyData = { companyName:'Amazon', table: JSON.parse(serverResponse.responseJson) };
              this.store.dispatch(AddCompanyData({payload: companyData}));
            }
          });
          break;
        }

        case 'Microsoft': {
          this.matrixService.fetchMicrosoftEmployees().subscribe((serverResponse: ResponseModel) => {
            if(serverResponse.success){
              let companyData: CompanyData = { companyName:'Microsoft', table: JSON.parse(serverResponse.responseJson) };
              this.store.dispatch(AddCompanyData({payload: companyData}));
            }
          });
          break;
        }
        default:{
          break;
        }
      }
      
    } catch(error) {
      console.log(error);
    }
  }

}
