import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodoGETPageRoutingModule } from './metodo-get-routing.module';

import { MetodoGETPage } from './metodo-get.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodoGETPageRoutingModule
  ],
  declarations: [MetodoGETPage]
})
export class MetodoGETPageModule {}
