import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerOrderHistoryComponent } from './customer-order-history/customer-order-history.component';

const appRoutes : Routes = [
  {path : 'dashBoard', component : DashBoardComponent },
  {path : '', component : CustomerLoginComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    DashBoardComponent,
    CustomerInfoComponent,
    CustomerOrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
