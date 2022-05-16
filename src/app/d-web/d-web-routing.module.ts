import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DWebPage } from './d-web.page';

const routes: Routes = [
  {
    path: '',
    component: DWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DWebPageRoutingModule {}
