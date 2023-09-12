import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataRetrieverService {
  private productUrl = 'api/products'; // URL to web api
  private publisherUrl = 'api/publishers'; // URL to web api

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any[]>('api/products');
  }

  getPublishers() {
    return this.http.get<any[]>('api/publishers');
  }

  getdataTogether() {
    return combineLatest([this.getProducts(), this.getPublishers()]).pipe(
      map(([products, publishers]) => {
        products.forEach((ce,ci,arr)=>{
          ce.available=ce.inStock
          publishers.forEach((cp,ci,arr)=>{
            if(ce.id===cp.id){
              ce.publisherInfo={phoneNumber:cp.phoneNumber,publisherName:cp.publisherName}
            }
          })
        })
        return products})
    );
  }
}
