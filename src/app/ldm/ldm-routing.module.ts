import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LdmPage } from './ldm.page';

const routes: Routes = [
  {
    path: '',
    component: LdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LdmPageRoutingModule {}
