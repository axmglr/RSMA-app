import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangefichePageRoutingModule } from './changefiche-routing.module';

import { ChangefichePage } from './changefiche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangefichePageRoutingModule
  ],
  declarations: [ChangefichePage]
})
export class ChangefichePageModule {}
