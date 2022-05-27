import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusServicosPageRoutingModule } from './meus-servicos-routing.module';

import { MeusServicosPage } from './meus-servicos.page';
import { ExameService } from '../exame.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusServicosPageRoutingModule
  ],
  declarations: [MeusServicosPage],
  providers: [
    ExameService
  ]
})
export class MeusServicosPageModule {}
