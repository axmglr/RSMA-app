import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaysagePage } from './paysage.page';

const routes: Routes = [
  {
    path: '',
    component: PaysagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaysagePageRoutingModule {}
