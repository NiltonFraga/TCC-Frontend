import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarServicoPageRoutingModule } from './editar-servico-routing.module';

import { EditarServicoPage } from './editar-servico.page';
import { ExameService } from '../exame.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarServicoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarServicoPage],
  providers: [
    ExameService
  ]
})
export class EditarServicoPageModule {}
