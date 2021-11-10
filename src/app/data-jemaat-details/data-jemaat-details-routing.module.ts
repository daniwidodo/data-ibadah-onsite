import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataJemaatDetailsPage } from './data-jemaat-details.page';

const routes: Routes = [
  {
    path: '',
    component: DataJemaatDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataJemaatDetailsPageRoutingModule {}
