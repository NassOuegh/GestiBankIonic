import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../entities/models';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.page.html',
  styleUrls: ['./creation-compte.page.scss'],
})
export class CreationComptePage implements OnInit {

  client: Client;
  clients: Client[];
  constructor(private service: ClientsService, private router: Router) { }

  ngOnInit() {
    this.refresh();
  }
  public submit(addform) {
    //alert(addform.value.num + " " + addform.value.name + " " + addform.value.country);
    this.client = {
      name: addform.value.nom,
      tel: addform.value.tel,
      mail: addform.value.mail,
      type: addform.value.typecompte,
      status: "EN ATTENTE",
      role: "CLIENT",
      password:"1234"
    };
    this.service.postClient(this.client).subscribe((response) => {
      alert("Ajout avec succès du client!");
      this.router.navigate(['/connexion']);
    });
  }
  public refresh() { 
    this.service.getClients().subscribe(
      response => {
        console.log(response);
        this.clients = (<Client[]>response);
       }
      );
    }
}
