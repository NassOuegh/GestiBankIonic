import { Component, OnInit } from '@angular/core';
import { IonRefresher } from '@ionic/angular';
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
  agents: Agent[]=[];

  constructor(private service: ClientsService, private serviceagents: AgentsService) {}

  ngOnInit() {
    this.refresh();
  }
  
  public affectAgent(client: Client, mailagent: string){
    client.agent=mailagent;
    this.service.putClient(client.mail, client).subscribe(()=>{
      console.log("GG BATEEERE"+client);
      this.refresh();
    })
  }

  public refresh() {
    this.service.getClients().subscribe((response) => {
      this.clients = <Client[]>response;
    });
    this.serviceagents.getAgents().subscribe((response) => {
      this.agents = <Agent[]>response;
    });
  }
}
