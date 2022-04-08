import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FicheDeRenseignementPage } from './fiche-de-renseignement.page';

const routes: Routes = [
  {
    path: '',
    component: FicheDeRenseignementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FicheDeRenseignementPageRoutingModule {}
