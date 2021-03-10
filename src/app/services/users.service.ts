import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
user: User;

  url: string="http://192.168.1.54:81/users";

  constructor(private http: HttpClient) { }

  public getUser(){
    return this.http.get(this.url+"/list");
  }

  public getUsersByMail(mail: string){
    console.log(this.url+"/list/" + mail);
    return this.http.get(this.url+"/list/"+mail);
  }

  public postUser(user: User){
    return this.http.post(this.url+"/add", user);
  }
}
