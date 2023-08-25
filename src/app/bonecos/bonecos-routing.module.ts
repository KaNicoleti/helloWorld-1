import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonecosPage } from './bonecos.page';

const routes: Routes = [
  {
    path: '',
    component: BonecosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonecosPageRoutingModule {}
