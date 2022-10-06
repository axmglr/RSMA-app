import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesUsPage } from './acces-us.page';

const routes: Routes = [
  {
    path: '',
    component: AccesUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesUsPageRoutingModule {}
