import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonecosPageRoutingModule } from './bonecos-routing.module';

import { BonecosPage } from './bonecos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonecosPageRoutingModule
  ],
  declarations: [BonecosPage]
})
export class BonecosPageModule {}
