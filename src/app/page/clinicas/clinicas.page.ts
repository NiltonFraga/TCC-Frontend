import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ClinicasService } from './clinicas.service';
import { ModalController, Platform } from '@ionic/angular';

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
  user: any;

  constructor(
    private router: Router,
    private storage: StorageService,
    public modalController: ModalController,
    public plt: Platform,
    private urlService: UrlService,
    private clinicasService: ClinicasService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/forum') {
        this.pageEnter();
      }
    });
  }

  async pageEnter(){
    this.user = await this.storage.get('user');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
    this.filtro = { topico: 'Todos', usuario: 0 };
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

  buscarDadosFiltro(){
    const request = {
      topico: this.filtro
    };
    this.getAllPost(request);
  }

  async curtirPost(id: number){
    const request = {
      id: 0,
      idPost: id,
      idUsuario: this.user.id
    };
    (await this.clinicasService.updateCurtida(request))
    .subscribe(() => {
      this.getAllPost(this.filtro);
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

  ngOnInit() {}
}
