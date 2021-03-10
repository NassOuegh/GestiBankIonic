import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Agent } from '../entities/models';
import { AgentsService } from '../services/agents.service';

@Component({
  selector: 'app-ajout-agents',
  templateUrl: './ajout-agents.page.html',
  styleUrls: ['./ajout-agents.page.scss'],
})
export class AjoutAgentsPage implements OnInit {
  agent: Agent;

  constructor(
    private service: AgentsService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

  public submit(addform) {
    this.agent = {
      name: addform.value.nom,
      tel: addform.value.tel,
      mail: addform.value.mail,
      password: this.makeid(12),
      matricule: addform.value.numMatr,
      role: 'AGENT',
      clients: []
    };
    this.service.postAgents(this.agent).subscribe((response) => {
      this.agentAlert();
      this.router.navigate(['/liste-agents']);
    });
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

  async agentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Erreur',
      message: 'Mauvais identifiant ou mot de passe.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
