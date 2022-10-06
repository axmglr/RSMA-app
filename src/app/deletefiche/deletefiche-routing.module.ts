import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletefichePage } from './deletefiche.page';

const routes: Routes = [
  {
    path: '',
    component: DeletefichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletefichePageRoutingModule {}
