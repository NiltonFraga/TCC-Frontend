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
            console.log(resp);
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

  editarServico(id: any){
    this.storage.set('idAnimal', id);
    this.router.navigateByUrl('page/editar-servicos');
  }

  verMeusProdutos(id: any){
    this.storage.set('idAnimal', id);
    this.router.navigateByUrl('page/meus-produtos');
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
