import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaconPageRoutingModule } from './macon-routing.module';

import { MaconPage } from './macon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaconPageRoutingModule
  ],
  declarations: [MaconPage]
})
export class MaconPageModule {}
