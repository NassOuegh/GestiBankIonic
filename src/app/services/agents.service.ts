import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from '../entities/models';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {


  url: string="http://localhost:81/agents";

  constructor(private http: HttpClient) { }

  public getAgents(){
    return this.http.get(this.url+"/list");
  }

  public getAgentsByMail(mail: string){
    console.log(this.url+"/" + mail);
    return this.http.get(this.url+"/"+mail);
  }

  public postAgents(agents: Agent){
    return this.http.post(this.url+"/add", agents);
  }

  public putAgent(mail: string, agent: Agent){
    console.log(1);
    return this.http.put(this.url+"/"+mail, agent);
  }

  public deleteAgent(mail: string){
    return this.http.delete(this.url+"/"+mail);
  }
}
