import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspaceAgentsPageRoutingModule } from './espace-agents-routing.module';

import { EspaceAgentsPage } from './espace-agents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspaceAgentsPageRoutingModule
  ],
  declarations: [EspaceAgentsPage]
})
export class EspaceAgentsPageModule {}
