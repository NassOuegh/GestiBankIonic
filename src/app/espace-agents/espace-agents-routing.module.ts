import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspaceAgentsPage } from './espace-agents.page';

const routes: Routes = [
  {
    path: '',
    component: EspaceAgentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspaceAgentsPageRoutingModule {}
