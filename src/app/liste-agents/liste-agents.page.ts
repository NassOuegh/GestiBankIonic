import { Component, OnInit } from '@angular/core';
import { Agent } from '../entities/models';

import { AgentsService } from '../services/agents.service';

@Component({
  selector: 'app-liste-agents',
  templateUrl: './liste-agents.page.html',
  styleUrls: ['./liste-agents.page.scss'],
})
export class ListeAgentsPage implements OnInit {

  agent: Agent;
  agents: Agent[];
  constructor(private service: AgentsService) { }

  ngOnInit() {
    this.service.getAgents().subscribe(response=>this.agents=(<Agent[]>response));
  }

  public delete(mail: string){
    this.service.deleteAgent(mail).subscribe(()=>{
    console.log(mail);}
    );
  }
} 
