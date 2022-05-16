import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SixMoisPageRoutingModule } from './six-mois-routing.module';

import { SixMoisPage } from './six-mois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SixMoisPageRoutingModule
  ],
  declarations: [SixMoisPage]
})
export class SixMoisPageModule {}
