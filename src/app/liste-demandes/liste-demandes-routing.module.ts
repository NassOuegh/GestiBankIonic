import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeDemandesPage } from './liste-demandes.page';

const routes: Routes = [
  {
    path: '',
    component: ListeDemandesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeDemandesPageRoutingModule {}
