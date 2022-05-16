import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DWebPageRoutingModule } from './d-web-routing.module';

import { DWebPage } from './d-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DWebPageRoutingModule
  ],
  declarations: [DWebPage]
})
export class DWebPageModule {}
