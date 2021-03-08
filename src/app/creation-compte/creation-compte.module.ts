import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationComptePageRoutingModule } from './creation-compte-routing.module';

import { CreationComptePage } from './creation-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationComptePageRoutingModule
  ],
  declarations: [CreationComptePage]
})
export class CreationComptePageModule {}
