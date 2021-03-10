import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Client } from '../entities/models';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  url: string="http://192.168.1.54:81/clients";

  constructor(private http: HttpClient) { }

  public getClients(){
    return this.http.get(this.url+"/list");
  }

  public getClientsByMail(mail: string){
    console.log(this.url+"/list/" + mail);
    return this.http.get(this.url+"/list/"+mail);
  }

  public postClient(client: Client){
    return this.http.post(this.url+"/add", client);
  }
}
