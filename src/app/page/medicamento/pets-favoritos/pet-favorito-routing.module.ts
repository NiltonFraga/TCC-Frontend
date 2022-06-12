import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetFavoritoPage } from './pet-favorito.page';

const routes: Routes = [
  {
    path: '',
    component: PetFavoritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetFavoritoPageRoutingModule {}
