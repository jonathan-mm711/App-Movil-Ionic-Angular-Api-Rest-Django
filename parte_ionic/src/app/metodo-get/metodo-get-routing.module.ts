import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetodoGETPage } from './metodo-get.page';

const routes: Routes = [
  {
    path: '',
    component: MetodoGETPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetodoGETPageRoutingModule {}
