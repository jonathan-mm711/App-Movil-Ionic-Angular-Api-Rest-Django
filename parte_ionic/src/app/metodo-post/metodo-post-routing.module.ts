import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetodoPOSTPage } from './metodo-post.page';

const routes: Routes = [
  {
    path: '',
    component: MetodoPOSTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetodoPOSTPageRoutingModule {}
