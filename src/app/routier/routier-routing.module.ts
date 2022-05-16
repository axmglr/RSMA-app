import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutierPage } from './routier.page';

const routes: Routes = [
  {
    path: '',
    component: RoutierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutierPageRoutingModule {}
