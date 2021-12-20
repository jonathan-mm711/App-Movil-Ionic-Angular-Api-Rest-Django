import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetodoDELETEPage } from './metodo-delete.page';

const routes: Routes = [
  {
    path: '',
    component: MetodoDELETEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetodoDELETEPageRoutingModule {}
