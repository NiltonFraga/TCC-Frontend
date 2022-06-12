import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PetFavoritoPageRoutingModule } from './pet-favorito-routing.module';
import { PetFavoritoPage } from './pet-favorito.page';
import { MedicamentoService } from '../medicamento.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetFavoritoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PetFavoritoPage],
  providers: [MedicamentoService]
})
export class PetFavoritoPageModule {}
