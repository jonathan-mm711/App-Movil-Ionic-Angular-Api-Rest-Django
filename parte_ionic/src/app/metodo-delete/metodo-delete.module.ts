import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodoDELETEPageRoutingModule } from './metodo-delete-routing.module';

import { MetodoDELETEPage } from './metodo-delete.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodoDELETEPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MetodoDELETEPage]
})
export class MetodoDELETEPageModule {}
