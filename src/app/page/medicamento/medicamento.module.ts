import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentoPageRoutingModule } from './medicamento-routing.module';

import { MedicamentoPage } from './medicamento.page';
import { UrlService } from 'src/app/shared/class/url-service';
import { MedicamentoService } from './medicamento.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MedicamentoPage],
  providers: [
    MedicamentoService,
    UrlService
  ]
})
export class MedicamentoPageModule {}
