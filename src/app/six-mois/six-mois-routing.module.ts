import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SixMoisPage } from './six-mois.page';

const routes: Routes = [
  {
    path: '',
    component: SixMoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SixMoisPageRoutingModule {}
