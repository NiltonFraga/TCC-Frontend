import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarMedicamentoPageRoutingModule } from './criar-medicamento-routing.module';

import { CriarMedicamentoPage } from './criar-medicamento.page';
import { MedicamentoService } from '../medicamento.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CriarMedicamentoPageRoutingModule
  ],
  declarations: [CriarMedicamentoPage],
  providers: [
    MedicamentoService
  ]
})
export class CriarMedicamentoPageModule {}
