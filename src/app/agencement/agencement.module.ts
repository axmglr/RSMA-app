import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgencementPageRoutingModule } from './agencement-routing.module';

import { AgencementPage } from './agencement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgencementPageRoutingModule
  ],
  declarations: [AgencementPage]
})
export class AgencementPageModule {}
