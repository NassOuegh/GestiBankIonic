import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../entities/models';
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

  constructor(
    private service: UsersService,
    private router: Router,
    private alertController: AlertController
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

  public submit(addform) {
    this.mail = addform.value.login;
    this.password = addform.value.pwd;

    this.service.getUsersByMail(this.mail).subscribe((response) => {
      this.user = <User>response;
      if (this.user != null) {
        if (this.password == this.user.password) {
          switch (this.user.role) {
            case 'CLIENT': {
              this.router.navigate(['/espace-client']);
              this.clientAlert();
              break;
            }
            case 'ADMIN': {
              this.router.navigate(['/espace-admin']);
              this.adminAlert();
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
}
