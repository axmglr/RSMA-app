import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: "home",
    pathMatch:"full"
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'formations',
    loadChildren: () => import('./formations/formations.module').then( m => m.FormationsPageModule)
  },
  {
    path: 'fiche-formation',
    loadChildren: () => import('./fiche-formation/fiche-formation.module').then( m => m.FicheFormationPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'fiche-de-renseignement',
    loadChildren: () => import('./fiche-de-renseignement/fiche-de-renseignement.module').then( m => m.FicheDeRenseignementPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'volontaires',
    loadChildren: () => import('./volontaires/volontaires.module').then( m => m.VolontairesPageModule)
  },
  {
    path: 'd-web',
    loadChildren: () => import('./d-web/d-web.module').then( m => m.DWebPageModule)
  },

  {
    path: 'cv',
    loadChildren: () => import('./cv/cv.module').then( m => m.CvPageModule)
  },

  {
    path: 'entreprises',
    loadChildren: () => import('./entreprises/entreprises.module').then( m => m.EntreprisesPageModule)
  },
  {
    path: 'docafournir',
    loadChildren: () => import('./docafournir/docafournir.module').then( m => m.DocafournirPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
