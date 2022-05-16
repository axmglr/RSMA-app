import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharpentPage } from './charpent.page';

const routes: Routes = [
  {
    path: '',
    component: CharpentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharpentPageRoutingModule {}
