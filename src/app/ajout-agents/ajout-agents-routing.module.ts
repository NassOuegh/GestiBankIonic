import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutAgentsPage } from './ajout-agents.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutAgentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutAgentsPageRoutingModule {}
