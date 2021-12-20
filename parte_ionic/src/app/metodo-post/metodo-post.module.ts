import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodoPOSTPageRoutingModule } from './metodo-post-routing.module';

import { MetodoPOSTPage } from './metodo-post.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodoPOSTPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MetodoPOSTPage]
})
export class MetodoPOSTPageModule {}
