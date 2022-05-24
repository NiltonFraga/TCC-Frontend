import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditarPetPageRoutingModule } from './editar-pet-routing.module';
import { EditarPetPage } from './editar-pet.page';
import { MedicamentoService } from '../medicamento.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPetPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarPetPage],
  providers: [MedicamentoService]
})
export class EditarPetPageModule {}
