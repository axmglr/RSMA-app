import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletefichePageRoutingModule } from './deletefiche-routing.module';

import { DeletefichePage } from './deletefiche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletefichePageRoutingModule
  ],
  declarations: [DeletefichePage]
})
export class DeletefichePageModule {}
