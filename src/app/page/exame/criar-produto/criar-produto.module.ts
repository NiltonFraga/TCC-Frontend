import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarProdutoPageRoutingModule } from './criar-produto-routing.module';

import { CriarProdutoPage } from './criar-produto.page';
import { ExameService } from '../exame.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarProdutoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CriarProdutoPage],
  providers: [
    ExameService
  ]
})
export class CriarProdutoPageModule {}
