import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DixMoisPage } from './dix-mois.page';

const routes: Routes = [
  {
    path: '',
    component: DixMoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DixMoisPageRoutingModule {}
