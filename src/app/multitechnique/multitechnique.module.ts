import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultitechniquePageRoutingModule } from './multitechnique-routing.module';

import { MultitechniquePage } from './multitechnique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultitechniquePageRoutingModule
  ],
  declarations: [MultitechniquePage]
})
export class MultitechniquePageModule {}
