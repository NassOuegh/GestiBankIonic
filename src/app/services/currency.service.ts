import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  url: string = "https://api.exchangeratesapi.io/latest?base=";
  constructor(private http: HttpClient) { }

  public getCurrencies(base: string){
    return this.http.get(this.url+base);
  }
}
