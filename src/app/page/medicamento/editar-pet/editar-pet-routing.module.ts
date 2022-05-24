import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPetPage } from './editar-pet.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPetPageRoutingModule {}
