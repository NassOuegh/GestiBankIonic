import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Client } from '../entities/models';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  url: string="http://localhost:81/clients";

  constructor(private http: HttpClient) { }

  public getClients(){
    console.log("BJR");
    return this.http.get(this.url+"/list");
  }

  public getClientsByMail(mail: string){
    console.log(this.url+"/list/" + mail);
    return this.http.get(this.url+"/list/"+mail);
  }

  public getClientsEnAttente(){
    return this.http.get(this.url+"/list/attente");
  }

  public postClient(client: Client){
    return this.http.post(this.url+"/add", client);
  }

  public putClient(mail: string, client: Client){
    console.log("1");
    return this.http.put(this.url+"/"+mail, client);
  }

  public deleteClient(mail: string){
    console.log(this.url+"/"+mail);
    return this.http.delete(this.url+"/"+mail);
  }
}
