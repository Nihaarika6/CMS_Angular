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
import { CustomerPendingHistoryComponent } from './customer-pending-history/customer-pending-history.component';
// import { VendorComponent } from './vendor/vendor.component';
import { VendorInfoComponent } from './vendor-info/vendor-info.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorOrderHistoryComponent } from './vendor-order-history/vendor-order-history.component';
import { VendorPendingHistoryComponent } from './vendor-pending-history/vendor-pending-history.component';
import { DashBoarddComponent } from './dash-boardd/dash-boardd.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { WalletComponent } from './wallet/wallet.component';
import { CustomerCancelOrderComponent } from './customer-cancel-order/customer-cancel-order.component';

const appRoutes : Routes = [

  {path : 'dashBoard', component : DashBoardComponent,
  children :
  [
    {path:'placeOrder', component:PlaceOrderComponent, outlet:'data'},
    {path:'customerPendingHistory', component:CustomerPendingHistoryComponent, outlet:'data'},
    {path:'customerOrderHistory', component:CustomerOrderHistoryComponent, outlet:'data'},
    {path:'wallet', component:WalletComponent, outlet:'data'},
    {path:'customerCancelOrder', component:CustomerCancelOrderComponent, outlet:'data'},
  ]
},

  {path : '', component : CustomerLoginComponent },
  {path : 'dashBoard', component : DashBoarddComponent },
  // {path : '', component : VendorLoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    DashBoardComponent,
    CustomerInfoComponent,
    CustomerOrderHistoryComponent,
    CustomerPendingHistoryComponent,
    VendorInfoComponent,
    VendorLoginComponent,
    VendorOrderHistoryComponent,
    VendorPendingHistoryComponent,
    PlaceOrderComponent,
    WalletComponent,
    DashBoarddComponent,
    CustomerCancelOrderComponent
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
