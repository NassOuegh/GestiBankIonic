import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeAgentsPageRoutingModule } from './liste-agents-routing.module';

import { ListeAgentsPage } from './liste-agents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeAgentsPageRoutingModule
  ],
  declarations: [ListeAgentsPage]
})
export class ListeAgentsPageModule {}
