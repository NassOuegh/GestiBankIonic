import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeDemandesPageRoutingModule } from './liste-demandes-routing.module';

import { ListeDemandesPage } from './liste-demandes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeDemandesPageRoutingModule
  ],
  declarations: [ListeDemandesPage]
})
export class ListeDemandesPageModule {}
