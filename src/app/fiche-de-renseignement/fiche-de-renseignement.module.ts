import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FicheDeRenseignementPageRoutingModule } from './fiche-de-renseignement-routing.module';

import { FicheDeRenseignementPage } from './fiche-de-renseignement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FicheDeRenseignementPageRoutingModule
  ],
  declarations: [FicheDeRenseignementPage]
})
export class FicheDeRenseignementPageModule {}
