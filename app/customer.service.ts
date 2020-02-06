import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : Http) { }

  validateCustomer(user : string, pwd : string) : Observable<string> {
    return this.
    http.get("http://localhost:8080/MLP173/api/customer/"+user+"/"+pwd).
    map((res : Response) => res.text());
  }
  findByCustomerName(user : string) : Observable<Customer> {
    return this.
    http.get("http://localhost:8080/MLP173/api/customer/"+user).
    map((res : Response) => res.json());
  }
  orderHistory(custId : number) : Observable<Customer[]> {
    return this.
    http.get("http://localhost:8080/MLP173/api/orderdetail/historycus/"+custId).
    map((res : Response) => res.json());
  }
}
