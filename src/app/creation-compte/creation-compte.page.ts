import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
  constructor(private service: ClientsService, private router: Router, private toastController: ToastController) { }

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
      password: this.makeid(12),
      agent: "AUCUN"
    };
    this.service.postClient(this.client).subscribe((response) => {
      this.presentToast();
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

    public makeid(length) {
      var result = '';
      var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Votre compte a été créé. En attente de validation par un agent.',
        duration: 2000
      });
      toast.present();
    }
}
