import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentarioPageRoutingModule } from './comentario-routing.module';

import { ComentarioPage } from './comentario.page';
import { ClinicasService } from '../clinicas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentarioPageRoutingModule
  ],
  declarations: [ComentarioPage],
  providers: [
    ClinicasService
  ]
})
export class ComentarioPageModule {}
