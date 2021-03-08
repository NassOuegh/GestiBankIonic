import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationComptePage } from './creation-compte.page';

const routes: Routes = [
  {
    path: '',
    component: CreationComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationComptePageRoutingModule {}
