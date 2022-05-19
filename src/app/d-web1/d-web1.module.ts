import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DWeb1PageRoutingModule } from './d-web1-routing.module';

import { DWeb1Page } from './d-web1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DWeb1PageRoutingModule
  ],
  declarations: [DWeb1Page]
})
export class DWeb1PageModule {}
