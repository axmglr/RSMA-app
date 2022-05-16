import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DixMoisPageRoutingModule } from './dix-mois-routing.module';

import { DixMoisPage } from './dix-mois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DixMoisPageRoutingModule
  ],
  declarations: [DixMoisPage]
})
export class DixMoisPageModule {}
