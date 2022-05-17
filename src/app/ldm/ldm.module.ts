import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LdmPageRoutingModule } from './ldm-routing.module';

import { LdmPage } from './ldm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LdmPageRoutingModule
  ],
  declarations: [LdmPage]
})
export class LdmPageModule {}
