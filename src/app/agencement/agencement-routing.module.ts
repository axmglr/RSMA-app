import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgencementPage } from './agencement.page';

const routes: Routes = [
  {
    path: '',
    component: AgencementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencementPageRoutingModule {}
