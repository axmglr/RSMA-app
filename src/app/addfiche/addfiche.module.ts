import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddfichePageRoutingModule } from './addfiche-routing.module';

import { AddfichePage } from './addfiche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddfichePageRoutingModule
  ],
  declarations: [AddfichePage]
})
export class AddfichePageModule {}
