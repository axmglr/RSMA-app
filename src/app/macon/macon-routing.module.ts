import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaconPage } from './macon.page';

const routes: Routes = [
  {
    path: '',
    component: MaconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaconPageRoutingModule {}
