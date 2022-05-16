import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoursuitePageRoutingModule } from './poursuite-routing.module';

import { PoursuitePage } from './poursuite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoursuitePageRoutingModule
  ],
  declarations: [PoursuitePage]
})
export class PoursuitePageModule {}
