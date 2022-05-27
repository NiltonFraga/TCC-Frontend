import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusProdutosPageRoutingModule } from './meus-produtos-routing.module';

import { MeusProdutosPage } from './meus-produtos.page';
import { ExameService } from '../exame.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusProdutosPageRoutingModule
  ],
  declarations: [MeusProdutosPage],
  providers: [
    ExameService
  ]
})
export class MeusProdutosPageModule {}
