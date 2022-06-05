import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPostPageRoutingModule } from './editar-post-routing.module';

import { EditarPostPage } from './editar-post.page';
import { ClinicasService } from '../clinicas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPostPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarPostPage],
  providers: [
    ClinicasService
  ]
})
export class EditarPostPageModule {}
