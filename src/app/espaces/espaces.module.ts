import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspacesPageRoutingModule } from './espaces-routing.module';

import { EspacesPage } from './espaces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspacesPageRoutingModule
  ],
  declarations: [EspacesPage]
})
export class EspacesPageModule {}
