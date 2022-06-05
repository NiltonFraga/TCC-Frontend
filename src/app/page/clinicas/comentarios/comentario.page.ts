import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ClinicasService } from '../clinicas.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.page.html',
  styleUrls: ['./comentario.page.scss'],
})
export class ComentarioPage implements OnInit {

  post: any;
  foto: '';
  loading: boolean;
  mensagem: string;
  public user: any;
  public idPost: any;
  public conteudoNovo: string;

  constructor(
    private exameService: ClinicasService,
    public modalController: ModalController,
    public toastController: ToastController,
    private urlService: UrlService,
    private router: Router,
    private storage: StorageService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/comentario') {
         this.pageEnter();
      }
    });
  }

  async ngOnInit() { }

  async pageEnter(){
    this.user = await this.storage.get('user');
    const token = await this.storage.get('token');
    this.idPost = await this.storage.get('idAnimal');
    await this.urlService.validateToken(token);
    this.getPostAndComentarioById();
  }

  async getPostAndComentarioById(){
    this.showLoadingScreen()
      .then(async () => {
        (await this.exameService.getPostAndComentarioById(Number(this.idPost)))
          .subscribe((resp: any) => {
            this.post = resp;
          },
          error => {
            if(error.status === 401 || error.status === 403){
              this.storage.remove('user');
              this.router.navigateByUrl('');
            }
            else{
              this.toastController.create({
                message: error.error,
                duration: 5000
              }).then(toast => {
                toast.present();
              });
            }
          },
          () => {
            this.closeLoadingScreen();
          });
        });
  }

  async criarComentario(){
    if(this.conteudoNovo !== ''){
      const request = {
        conteudo: this.conteudoNovo,
        idUsuario:  this.user.id,
        idPost: this.idPost
      };
      this.showLoadingScreen()
        .then(async () => {
          (await this.exameService.postComentario(request))
            .subscribe((resp: any) => {
              this.conteudoNovo = '';
              this.getPostAndComentarioById();
            },
            error => {
              if(error.status === 401 || error.status === 403){
                this.storage.remove('user');
                this.router.navigateByUrl('');
              }
              else{
                this.toastController.create({
                  message: error.error,
                  duration: 5000
                }).then(toast => {
                  toast.present();
                });
              }
            },
            () => {
              this.closeLoadingScreen();
            });
          });
    }
  }

  async excluirComentario(id: number){
    this.showLoadingScreen()
        .then(async () => {
          (await this.exameService.deleteComentario(id))
            .subscribe((resp: any) => {
              this.conteudoNovo = '';
              this.getPostAndComentarioById();
            },
            error => {
              if(error.status === 401 || error.status === 403){
                this.storage.remove('user');
                this.router.navigateByUrl('');
              }
              else{
                this.toastController.create({
                  message: error.error,
                  duration: 5000
                }).then(toast => {
                  toast.present();
                });
              }
            },
            () => {
              this.closeLoadingScreen();
            });
          });
  }

  async excluirPost(id: number){
    this.showLoadingScreen()
        .then(async () => {
          (await this.exameService.deletePost(id))
            .subscribe((resp: any) => {
              this.router.navigateByUrl('/page/forum');
            },
            error => {
              if(error.status === 401 || error.status === 403){
                this.storage.remove('user');
                this.router.navigateByUrl('');
              }
              else{
                this.toastController.create({
                  message: error.error,
                  duration: 5000
                }).then(toast => {
                  toast.present();
                });
              }
            },
            () => {
              this.closeLoadingScreen();
            });
          });
  }

  async curtirPost(id: number){
    const request = {
      id: 0,
      idPost: id,
      idUsuario: this.user.id
    };
    (await this.exameService.updateCurtida(request))
    .subscribe(async () => {
      (await this.exameService.getPostAndComentarioById(Number(this.idPost)))
          .subscribe((resp: any) => {
            this.post = resp;
          },
          error => {
            if(error.status === 401 || error.status === 403){
              this.storage.remove('user');
              this.router.navigateByUrl('');
            }
            else{
              this.toastController.create({
                message: error.error,
                duration: 5000
              }).then(toast => {
                toast.present();
              });
            }
          },
          () => {
            this.closeLoadingScreen();
          });
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

  editarPost(id){
    this.storage.set('idAnimal', id);
    this.router.navigateByUrl('/page/editar-post');
  }

  async showLoadingScreen() {
    const loadingScreen = await this.modalController.create({
      component: LoadingPage
    });
    return await loadingScreen.present();
  }

  async closeLoadingScreen() {
    this.modalController.getTop().then(loader => {
      if (loader) {
        loader.dismiss();
      }
    });
  }

}
