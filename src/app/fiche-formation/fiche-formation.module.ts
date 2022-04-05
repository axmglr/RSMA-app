import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FicheFormationPageRoutingModule } from './fiche-formation-routing.module';

import { FicheFormationPage } from './fiche-formation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FicheFormationPageRoutingModule
  ],
  declarations: [FicheFormationPage]
})
export class FicheFormationPageModule {}
