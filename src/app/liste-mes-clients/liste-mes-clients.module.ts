import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeMesClientsPageRoutingModule } from './liste-mes-clients-routing.module';

import { ListeMesClientsPage } from './liste-mes-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeMesClientsPageRoutingModule
  ],
  declarations: [ListeMesClientsPage]
})
export class ListeMesClientsPageModule {}
