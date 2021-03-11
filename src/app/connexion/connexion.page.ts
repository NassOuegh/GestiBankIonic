import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Client, User } from '../entities/models';
import { DataResolverService } from '../resolver/data-resolver.service';
import { ClientsService } from '../services/clients.service';
import { DataService } from '../services/data.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  mail: string;
  password: string;
  user: User;
  users: User[];
  client: Client;
  valide: boolean=false;

  constructor(
    private service: UsersService,
    private router: Router,
    private alertController: AlertController,
    private dataService: DataService,
    private serviceClient: ClientsService
  ) {}

  ngOnInit() {}
  async clientAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenue',
      message:
        'Bonjour ' + this.user.name + '. Bienvenue sur votre espace Client.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async agentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenue',
      message:
        'Bonjour ' + this.user.name + '. Bienvenue sur votre espace Agent.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async adminAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenue',
      message:
        'Bonjour ' + this.user.name + '. Bienvenue sur votre espace Admin.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async wrongPwdAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Erreur',
      message: 'Mauvais identifiant ou mot de passe.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async attenteAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Erreur',
      message: 'Votre compte est en attente de validation par un agent.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  public submit(addform) {
    this.mail = addform.value.login;
    this.password = addform.value.pwd;

    this.service.getUsersByMail(this.mail).subscribe((response) => {
      this.user = <User>response;
      if (this.user != null) {
        if (this.password == this.user.password) {
          switch (this.user.role) {
            case 'CLIENT': {
              this.estValide();
              console.log("ok2");

              break;
            }
            case 'ADMIN': {
              this.router.navigate(['/espace-admin']);
              this.adminAlert();
              break;
            }
            case 'AGENT': {
              this.openEspaceAgent();
              this.agentAlert();
              break;
            }
          }
        } else {
          this.wrongPwdAlert();
        }
      } else {
        this.wrongPwdAlert();
      }
    });
  }

  public openEspaceAgent() {
    this.dataService.setData(this.user.mail, this.user);
    this.router.navigate(['/espace-agents/' + this.user.mail]);
  }

  public estValide() {
    this.serviceClient.getClientsByMail(this.mail).subscribe((response) => {
      this.client = <Client>response;
      console.log(this.client.status);
      console.log(response);
      if (this.client.status == "VALIDE"){ console.log("OK"); this.valide= true;}
      else {this.valide=  false;}
      if (this.valide==false) {
        this.router.navigate(['/espace-client']);
        this.clientAlert();
      } else {
        this.attenteAlert();
      }
    });

  }
}
