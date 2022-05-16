import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemisPage } from './remis.page';

const routes: Routes = [
  {
    path: '',
    component: RemisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemisPageRoutingModule {}
