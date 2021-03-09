import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Client } from '../entities/models';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  mail: string;
  password: string;
  client: Client;
  clients: Client[];
  
  constructor(private service: ClientsService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenue',
      message: 'Bonjour '+this.client.name+'. Bienvenue sur votre espace Client.',
      buttons: ['OK']
    });

    await alert.present();
  }


  public submit(addform) {
    this.mail= addform.value.login;
    this.password= addform.value.pwd;

    this.service.getClientsByMail(this.mail).subscribe((response) => {
      this.client = (<Client>response);
      if (this.password==this.client.password){
        this.router.navigate(['/accueil']);
        this.presentAlert();
      }
    });

  }
}
