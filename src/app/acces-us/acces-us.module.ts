import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesUsPageRoutingModule } from './acces-us-routing.module';

import { AccesUsPage } from './acces-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesUsPageRoutingModule
  ],
  declarations: [AccesUsPage]
})
export class AccesUsPageModule {}
