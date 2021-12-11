import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptor } from './http.interceptor';
import { IndexComponent } from './components/index/index.component';

import { StoreModule } from '@ngrx/store';
import { CompanyReducer } from './reducers/company.reducer';
import { GraphComponent } from './components/graph/graph.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    StoreModule.forRoot({
      company: CompanyReducer
    })
    ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
