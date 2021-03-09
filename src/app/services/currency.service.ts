import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  url: string = "https://api.exchangeratesapi.io/latest";
  constructor(private http: HttpClient) { }

  public getCurrencies(){
    return this.http.get(this.url);
  }
}
