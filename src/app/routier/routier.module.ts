import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutierPageRoutingModule } from './routier-routing.module';

import { RoutierPage } from './routier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutierPageRoutingModule
  ],
  declarations: [RoutierPage]
})
export class RoutierPageModule {}
