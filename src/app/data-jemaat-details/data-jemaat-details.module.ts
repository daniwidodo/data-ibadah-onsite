import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataJemaatDetailsPageRoutingModule } from './data-jemaat-details-routing.module';

import { DataJemaatDetailsPage } from './data-jemaat-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataJemaatDetailsPageRoutingModule
  ],
  declarations: [DataJemaatDetailsPage]
})
export class DataJemaatDetailsPageModule {}
