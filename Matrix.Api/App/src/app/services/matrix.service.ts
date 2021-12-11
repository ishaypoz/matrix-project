import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseModel, URL_ROUTES } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {
  
  constructor(private http: HttpClient) { }

  fetchGoogleEmployees(): Observable<ResponseModel> {
    const SERVER_URL_GET_DATA = environment.SERVER_API_URL + URL_ROUTES.GET_EMPLOYEES;
    return this.http.post<ResponseModel>(SERVER_URL_GET_DATA, { companyName: "Google"});
  }

  fetchAmazonEmployees(): Observable<ResponseModel> {
    const SERVER_URL_GET_DATA = environment.SERVER_API_URL + URL_ROUTES.GET_EMPLOYEES;
    return this.http.post<ResponseModel>(SERVER_URL_GET_DATA, { companyName: "Amazon"});
  }

  fetchMicrosoftEmployees(): Observable<ResponseModel> {
    const SERVER_URL_GET_DATA = environment.SERVER_API_URL + URL_ROUTES.GET_EMPLOYEES;
    return this.http.post<ResponseModel>(SERVER_URL_GET_DATA, { companyName: "Microsoft"});
  }

}
