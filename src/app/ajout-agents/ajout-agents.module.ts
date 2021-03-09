import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutAgentsPageRoutingModule } from './ajout-agents-routing.module';

import { AjoutAgentsPage } from './ajout-agents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutAgentsPageRoutingModule
  ],
  declarations: [AjoutAgentsPage]
})
export class AjoutAgentsPageModule {}
