import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../entities/models';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.page.html',
  styleUrls: ['./liste-clients.page.scss'],
})
export class ListeClientsPage implements OnInit {
  clients: Client[];

  constructor(private service: ClientsService, private router: Router) {}

  ngOnInit() {
    this.refresh;
  }

  public delete(mail: string) {
    this.service.deleteClient(mail).subscribe(() => {
      console.log(mail);
      this.router.navigate(['/liste-clients']);
    });
    this.refresh;
  }

  public refresh() {
    this.service.getClients().subscribe((response) => {
      this.clients = <Client[]>response;
      console.log(this.clients);
    });
  }
}
