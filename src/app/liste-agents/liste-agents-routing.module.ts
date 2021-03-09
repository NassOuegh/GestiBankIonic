import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeAgentsPage } from './liste-agents.page';

const routes: Routes = [
  {
    path: '',
    component: ListeAgentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeAgentsPageRoutingModule {}
