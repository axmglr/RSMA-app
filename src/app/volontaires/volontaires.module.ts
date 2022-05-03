import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolontairesPageRoutingModule } from './volontaires-routing.module';

import { VolontairesPage } from './volontaires.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolontairesPageRoutingModule
  ],
  declarations: [VolontairesPage]
})
export class VolontairesPageModule {}
