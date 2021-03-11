import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from '../entities/models';
import { Client } from '../entities/models';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-liste-mes-clients',
  templateUrl: './liste-mes-clients.page.html',
  styleUrls: ['./liste-mes-clients.page.scss'],
})
export class ListeMesClientsPage implements OnInit {
  data: any;
  agent: Agent;
  clients: Client[];
  newClient: Client;
 
  constructor(private route: ActivatedRoute, private router: Router, private service: ClientsService) {
 
  }
 
  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.data = this.route.snapshot.data['special'];
    }
    this.agent=this.data;
    this.refresh();
  }

  public refresh() {
    this.service.getClients().subscribe((response) => {
      this.clients = <Client[]>response;
      console.log(this.clients);
    });
  }

  public validerClient(client: Client) {
    this.newClient = {
      name: client.name,
      tel: client.tel,
      mail: client.mail,
      type: client.type,
      status: "VALIDE",
      role: client.role,
      password: client.password,
      agent: client.agent,
    };

      this.service
        .putClient(client.mail, this.newClient)
        .subscribe((response) => {
          this.refresh();
        });
  }

  public submit(client: Client) {
    this.validerClient(client);
  }
  }