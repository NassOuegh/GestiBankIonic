import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeMesClientsPage } from './liste-mes-clients.page';

const routes: Routes = [
  {
    path: '',
    component: ListeMesClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeMesClientsPageRoutingModule {}
