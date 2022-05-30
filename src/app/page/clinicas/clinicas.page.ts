import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ClinicasService } from './clinicas.service';

import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { EnderecoAtualPage } from 'src/app/modal/endereco-atual/endereco-atual.page';
import { EnderecoConfirmacaoPage } from 'src/app/modal/endereco-confirmacao/endereco-confirmacao.page';

@Component({
  selector: 'app-clinicas',
  templateUrl: './clinicas.page.html',
  styleUrls: ['./clinicas.page.scss'],
})
export class ClinicasPage implements OnInit {

  loading: boolean;
  mensagem: string;
  posts: any;
  filtro: any;

  constructor(
    private router: Router,
    private storage: StorageService,
    public modalController: ModalController,
    public plt: Platform,
    private urlService: UrlService,
    private clinicasService: ClinicasService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/clinicas') {
        this.pageEnter();
      }
    });
  }

  async pageEnter(){
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
    this.filtro = { topico: '', usuario: 0 };
    this.getAllPost(this.filtro);
  }

  async getAllPost(filtro: any){
    (await this.clinicasService.getAllPost(filtro))
    .subscribe((resp: any) => {
      this.posts = resp;
      console.log(this.posts);

      if(this.posts.length === 0){
        this.mensagem = 'Não há nenhum post';
      }

      this.loading = false;
    },
    error => {
      if(error.status === 401 || error.status === 403){
        this.storage.remove('user');
        this.router.navigateByUrl('');
      }
      this.mensagem = error.error;
      this.loading = false;
    });
  }

  criarPost(){
    this.router.navigateByUrl('/page/criar-post');
  }

  verComentarios(id: any){
    this.storage.set('idAnimal', id);
    this.router.navigateByUrl('/page/comentario');
  }

  ngOnInit() {}
}
