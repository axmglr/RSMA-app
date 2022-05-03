import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolontairesPage } from './volontaires.page';

const routes: Routes = [
  {
    path: '',
    component: VolontairesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolontairesPageRoutingModule {}
