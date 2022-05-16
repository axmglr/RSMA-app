import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspacesPage } from './espaces.page';

const routes: Routes = [
  {
    path: '',
    component: EspacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspacesPageRoutingModule {}
