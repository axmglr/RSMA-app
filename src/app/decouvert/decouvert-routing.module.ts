import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecouvertPage } from './decouvert.page';

const routes: Routes = [
  {
    path: '',
    component: DecouvertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecouvertPageRoutingModule {}
