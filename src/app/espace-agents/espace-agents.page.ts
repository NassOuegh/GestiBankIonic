import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from '../entities/models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-espace-agents',
  templateUrl: './espace-agents.page.html',
  styleUrls: ['./espace-agents.page.scss'],
})
export class EspaceAgentsPage implements OnInit {

  data: any;
  agent: Agent;
 
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
 
  }
 
  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.data = this.route.snapshot.data['special'];
    }
    this.agent=this.data
    console.log(this.agent.mail);
  }

  /*public openClientsAttente() {
    this.dataService.setData(this.agent.mail, this.agent);
    this.router.navigate(['/mes-clients-en-attente/'+this.agent.mail]);
  }*/

  public openMesClients() {
    this.dataService.setData(this.agent.mail, this.agent);
    this.router.navigate(['/liste-mes-clients/'+this.agent.mail]);
  }
}
