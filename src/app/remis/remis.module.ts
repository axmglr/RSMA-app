import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemisPageRoutingModule } from './remis-routing.module';

import { RemisPage } from './remis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemisPageRoutingModule
  ],
  declarations: [RemisPage]
})
export class RemisPageModule {}
