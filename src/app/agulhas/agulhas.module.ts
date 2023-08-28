import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgulhasPageRoutingModule } from './agulhas-routing.module';

import { AgulhasPage } from './agulhas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgulhasPageRoutingModule
  ],
  declarations: [AgulhasPage]
})
export class AgulhasPageModule {}