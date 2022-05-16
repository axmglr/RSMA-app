import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoursuitePage } from './poursuite.page';

const routes: Routes = [
  {
    path: '',
    component: PoursuitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoursuitePageRoutingModule {}
