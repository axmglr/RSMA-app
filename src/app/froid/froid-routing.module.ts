import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FroidPage } from './froid.page';

const routes: Routes = [
  {
    path: '',
    component: FroidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FroidPageRoutingModule {}
