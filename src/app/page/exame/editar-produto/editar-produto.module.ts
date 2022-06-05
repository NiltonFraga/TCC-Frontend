import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarProdutoPageRoutingModule } from './editar-produto-routing.module';

import { EditarProdutoPage } from './editar-produto.page';
import { ExameService } from '../exame.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarProdutoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarProdutoPage],
  providers: [
    ExameService
  ]
})
export class EditarProdutoPageModule {}
