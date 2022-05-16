import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaysagePageRoutingModule } from './paysage-routing.module';

import { PaysagePage } from './paysage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaysagePageRoutingModule
  ],
  declarations: [PaysagePage]
})
export class PaysagePageModule {}
