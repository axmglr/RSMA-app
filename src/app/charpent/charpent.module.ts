import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharpentPageRoutingModule } from './charpent-routing.module';

import { CharpentPage } from './charpent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharpentPageRoutingModule
  ],
  declarations: [CharpentPage]
})
export class CharpentPageModule {}
