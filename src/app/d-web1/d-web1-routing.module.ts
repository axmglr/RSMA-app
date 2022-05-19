import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DWeb1Page } from './d-web1.page';

const routes: Routes = [
  {
    path: '',
    component: DWeb1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DWeb1PageRoutingModule {}
