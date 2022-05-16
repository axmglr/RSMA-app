import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecouvertPageRoutingModule } from './decouvert-routing.module';

import { DecouvertPage } from './decouvert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecouvertPageRoutingModule
  ],
  declarations: [DecouvertPage]
})
export class DecouvertPageModule {}
