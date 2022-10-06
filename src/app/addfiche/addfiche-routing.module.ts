import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddfichePage } from './addfiche.page';

const routes: Routes = [
  {
    path: '',
    component: AddfichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddfichePageRoutingModule {}
