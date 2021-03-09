import { Component, OnInit } from '@angular/core';
import { Rate, RateName } from '../entities/models';
import { pickerController } from '@ionic/core/dist/ionic/index.esm.js';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage implements OnInit {
  rates: Rate;
  taux: number;
  resultat: number;
  ratesList: Array<RateName>=[];

  constructor(private service: CurrencyService) {}

  ngOnInit() {
    
  }

  public getCurrenciesList(){
    this.ratesList.push({name: "AUD", rates: this.rates.rates.AUD},
    {name: "CAD", rates: this.rates.rates.CAD},
    {name: "HKD", rates: this.rates.rates.HKD},
    {name: "ISK", rates: this.rates.rates.ISK},
    {name: "PHP", rates: this.rates.rates.PHP},
    {name: "DKK", rates: this.rates.rates.DKK},
    {name: "HUF", rates: this.rates.rates.HUF},
    {name: "CZK", rates: this.rates.rates.CZK},
    {name: "AUD", rates: this.rates.rates.AUD},
    {name: "RON", rates: this.rates.rates.RON},
    {name: "SEK", rates: this.rates.rates.SEK},
    {name: "IDR", rates: this.rates.rates.IDR},
    {name: "INR", rates: this.rates.rates.INR},
    {name: "BRL", rates: this.rates.rates.BRL},
    {name: "RUB", rates: this.rates.rates.RUB},
    {name: "HRK", rates: this.rates.rates.HRK},
    {name: "JPY", rates: this.rates.rates.JPY},
    {name: "THB", rates: this.rates.rates.THB},
    {name: "CHF", rates: this.rates.rates.CHF},
    {name: "SGD", rates: this.rates.rates.SGD},
    {name: "PLN", rates: this.rates.rates.PLN},
    {name: "BGN", rates: this.rates.rates.BGN},
    {name: "TRY", rates: this.rates.rates.TRY},
    {name: "CNY", rates: this.rates.rates.CNY},
    {name: "NOK", rates: this.rates.rates.NOK},
    {name: "NZD", rates: this.rates.rates.NZD},
    {name: "ZAR", rates: this.rates.rates.ZAR},
    {name: "USD", rates: this.rates.rates.USD},
    {name: "MXN", rates: this.rates.rates.MXN},
    {name: "ILS", rates: this.rates.rates.ILS},
    {name: "GBP", rates: this.rates.rates.GBP},
    {name: "KRW", rates: this.rates.rates.KRW},
    {name: "MYR", rates: this.rates.rates.MYR}
    ); 
  }

  public submit(addform) {
    this.service.getCurrencies().subscribe((response) => {
      console.log(response);
      this.rates = <Rate>response;
      this.getCurrenciesList();
      for (var rn of this.ratesList){
        if (rn.name==addform.value.devise){
          this.taux = rn.rates;
          this.resultat=this.taux*addform.value.montant;
        }
      };
    });
  }
}
