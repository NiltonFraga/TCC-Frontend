import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ExameService } from '../exame.service';

@Component({
  selector: 'app-meus-servicos',
  templateUrl: './meus-servicos.page.html',
  styleUrls: ['./meus-servicos.page.scss'],
})
export class MeusServicosPage implements OnInit {

  servicos: any;
  foto = 'https://scontent.fsdu15-1.fna.fbcdn.net/v/t1.6435-9/173246721_1109225312820513_6797640485221109157_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHxv9P3vxN2ECLC28mmIHy1ZceYjGMwe4hlx5iMYzB7iKidkYOuzm1Hw3L1WyH-Hzh-5vtReM-bAQWjgd0Z_qUu&_nc_ohc=4MaH5D1ZvrIAX9iecDQ&_nc_ht=scontent.fsdu15-1.fna&oh=00_AT-wMwuvzScMEiI1zKHE4KAeEOcDXx-OlzG65ggb2Fv7sQ&oe=62B1DFBE';
  loading: boolean;
  mensagem: string;
  public user: any;

  constructor(
    private exameService: ExameService,
    public modalController: ModalController,
    public toastController: ToastController,
    private urlService: UrlService,
    private router: Router,
    private storage: StorageService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/meus-servicos') {
         this.pageEnter();
      }
    });
  }

  async ngOnInit() { }

  async pageEnter(){
    this.user = await this.storage.get('user');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
    this.getServicosByUsuario();
  }

  async getServicosByUsuario(){
    this.showLoadingScreen()
      .then(async () => {
        (await this.exameService.getServicosByUsuario(this.user.id))
          .subscribe((resp: any) => {
            this.servicos = resp;
            this.servicos.map(x => {
              if(x.imagem !== null){
                x.img = `data:${x.imagem.tipo};base64,${x.imagem.dados}`;
              }
            });
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
