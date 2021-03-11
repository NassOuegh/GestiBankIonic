import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Agent, Client } from '../entities/models';
import { AgentsService } from '../services/agents.service';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-liste-demandes',
  templateUrl: './liste-demandes.page.html',
  styleUrls: ['./liste-demandes.page.scss'],
})
export class ListeDemandesPage implements OnInit {
  clients: Client[] = [];
  body: Client[] = [];
  newClient: Client;

  mailagent: string;
  agents: Agent[]=[];

  constructor(private service: ClientsService, private serviceagents: AgentsService) {}

  ngOnInit() {
    this.refresh();
  }
  
  public affectAgent(client: Client, mailagent: string){
    this.newClient = {
      name: client.name,
      tel:client.tel,
      mail: client.mail,
      type: client.type,
      status: client.status,
      role: client.role,
      password:client.password,
      agent: mailagent
    };

    this.service.putClient(client.mail, this.newClient).subscribe((response)=>{
      this.refresh();
    });
  }

  public submit(addform: NgForm, client){
    this.mailagent=addform.value.affectAgent;
    this.affectAgent(client,this.mailagent);
  }

  public refresh() {
    this.service.getClientsEnAttente().subscribe((response) => {
      this.clients = <Client[]>response;
    });
    this.serviceagents.getAgents().subscribe((response) => {
      this.agents = <Agent[]>response;
    });
  }
}
