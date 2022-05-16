import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FroidPageRoutingModule } from './froid-routing.module';

import { FroidPage } from './froid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FroidPageRoutingModule
  ],
  declarations: [FroidPage]
})
export class FroidPageModule {}
