import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangefichePage } from './changefiche.page';

const routes: Routes = [
  {
    path: '',
    component: ChangefichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangefichePageRoutingModule {}
