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
    path: 'macon',
    loadChildren: () => import('./macon/macon.module').then( m => m.MaconPageModule)
  },
  {
    path: 'engins',
    loadChildren: () => import('./engins/engins.module').then( m => m.EnginsPageModule)
  },
  {
    path: 'charpent',
    loadChildren: () => import('./charpent/charpent.module').then( m => m.CharpentPageModule)
  },
  {
    path: 'agencement',
    loadChildren: () => import('./agencement/agencement.module').then( m => m.AgencementPageModule)
  },
  {
    path: 'multitechnique',
    loadChildren: () => import('./multitechnique/multitechnique.module').then( m => m.MultitechniquePageModule)
  },
  {
    path: 'decouvert',
    loadChildren: () => import('./decouvert/decouvert.module').then( m => m.DecouvertPageModule)
  },
  {
    path: 'paysage',
    loadChildren: () => import('./paysage/paysage.module').then( m => m.PaysagePageModule)
  },
  {
    path: 'enfant',
    loadChildren: () => import('./enfant/enfant.module').then( m => m.EnfantPageModule)
  },
  {
    path: 'poursuite',
    loadChildren: () => import('./poursuite/poursuite.module').then( m => m.PoursuitePageModule)
  },
  {
    path: 'remis',
    loadChildren: () => import('./remis/remis.module').then( m => m.RemisPageModule)
  },
  {
    path: 'divers',
    loadChildren: () => import('./divers/divers.module').then( m => m.DiversPageModule)
  },
  {
    path: 'automobile',
    loadChildren: () => import('./automobile/automobile.module').then( m => m.AutomobilePageModule)
  },
  {
    path: 'espaces',
    loadChildren: () => import('./espaces/espaces.module').then( m => m.EspacesPageModule)
  },
  {
    path: 'six-mois',
    loadChildren: () => import('./six-mois/six-mois.module').then( m => m.SixMoisPageModule)
  },
  {
    path: 'dix-mois',
    loadChildren: () => import('./dix-mois/dix-mois.module').then( m => m.DixMoisPageModule)
  },
  {
    path: 'magasin',
    loadChildren: () => import('./magasin/magasin.module').then( m => m.MagasinPageModule)
  },
  {
    path: 'restauration',
    loadChildren: () => import('./restauration/restauration.module').then( m => m.RestaurationPageModule)
  },
  {
    path: 'securite',
    loadChildren: () => import('./securite/securite.module').then( m => m.SecuritePageModule)
  },
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then( m => m.PublicPageModule)
  },
  {
    path: 'electricien',
    loadChildren: () => import('./electricien/electricien.module').then( m => m.ElectricienPageModule)
  },
  {
    path: 'routier',
    loadChildren: () => import('./routier/routier.module').then( m => m.RoutierPageModule)
  },
  {
    path: 'froid',
    loadChildren: () => import('./froid/froid.module').then( m => m.FroidPageModule)
  },
  {
    path: 'cv',
    loadChildren: () => import('./cv/cv.module').then( m => m.CvPageModule)
  },
  {
    path: 'ldm',
    loadChildren: () => import('./ldm/ldm.module').then( m => m.LdmPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
