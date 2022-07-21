import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocafournirPageRoutingModule } from './docafournir-routing.module';

import { DocafournirPage } from './docafournir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocafournirPageRoutingModule
  ],
  declarations: [DocafournirPage]
})
export class DocafournirPageModule {}
