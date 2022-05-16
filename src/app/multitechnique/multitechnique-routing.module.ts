import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultitechniquePage } from './multitechnique.page';

const routes: Routes = [
  {
    path: '',
    component: MultitechniquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultitechniquePageRoutingModule {}
