import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  {
    path: 'accueil',
    loadChildren: () =>
      import('./accueil/accueil.module').then((m) => m.AccueilPageModule),
  },
  {
    path: 'connexion',
    loadChildren: () =>
      import('./connexion/connexion.module').then((m) => m.ConnexionPageModule),
  },
  {
    path: 'creation-compte',
    loadChildren: () =>
      import('./creation-compte/creation-compte.module').then(
        (m) => m.CreationComptePageModule
      ),
  },
  {
    path: 'conversion',
    loadChildren: () =>
      import('./conversion/conversion.module').then(
        (m) => m.ConversionPageModule
      ),
  },
  {
    path: 'espace-admin',
    loadChildren: () =>
      import('./espace-admin/espace-admin.module').then(
        (m) => m.EspaceAdminPageModule
      ),
  },
  {
    path: 'espace-client',
    loadChildren: () =>
      import('./espace-client/espace-client.module').then(
        (m) => m.EspaceClientPageModule
      ),
  },
  {
    path: 'liste-agents',
    loadChildren: () =>
      import('./liste-agents/liste-agents.module').then(
        (m) => m.ListeAgentsPageModule
      ),
  },
  {
    path: 'liste-demandes',
    loadChildren: () =>
      import('./liste-demandes/liste-demandes.module').then(
        (m) => m.ListeDemandesPageModule
      ),
  },
  {
    path: 'ajout-agents',
    loadChildren: () =>
      import('./ajout-agents/ajout-agents.module').then(
        (m) => m.AjoutAgentsPageModule
      ),
  },
  {
    path: 'liste-clients',
    loadChildren: () =>
      import('./liste-clients/liste-clients.module').then(
        (m) => m.ListeClientsPageModule
      ),
  },
  {
    path: 'espace-agents',
    loadChildren: () =>
      import('./espace-agents/espace-agents.module').then(
        (m) => m.EspaceAgentsPageModule
      ),
  },
  {
    path: 'liste-mes-clients',
    loadChildren: () =>
      import('./liste-mes-clients/liste-mes-clients.module').then(
        (m) => m.ListeMesClientsPageModule
      ),
  },
  {
    path: 'espace-agents/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./espace-agents/espace-agents.module').then(
        (m) => m.EspaceAgentsPageModule
      ),
  },
  {
    path: 'liste-mes-clients/:id',
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import('./liste-mes-clients/liste-mes-clients.module').then(
        (m) => m.ListeMesClientsPageModule
      ),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
