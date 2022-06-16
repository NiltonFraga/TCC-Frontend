import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ExameService } from '../exame.service';

@Component({
  selector: 'app-meus-produtos',
  templateUrl: './meus-produtos.page.html',
  styleUrls: ['./meus-produtos.page.scss'],
})
export class MeusProdutosPage implements OnInit {

  produtos: any;
  loading: boolean;
  mensagem: string;
  public user: any;
  public idServico: any;

  constructor(
    private exameService: ExameService,
    public modalController: ModalController,
    public toastController: ToastController,
    private urlService: UrlService,
    private router: Router,
    private storage: StorageService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/meus-produtos') {
         this.pageEnter();
      }
    });
  }

  async ngOnInit() { }

  async pageEnter(){
    this.user = await this.storage.get('user');
    this.idServico = await this.storage.get('idAnimal');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
    if(this.idServico === null){
      this.router.navigateByUrl('page/meus-servicos');
    }else{
      this.getProdutosByServico();
    }
  }

  async getProdutosByServico(){
    this.showLoadingScreen()
      .then(async () => {
        (await this.exameService.getProdutosByServico(this.idServico))
          .subscribe((resp: any) => {
            this.produtos = resp;
            this.produtos.map(x => {
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

  editarProduto(id: any){
    this.storage.set('idAnimal', id);
    this.router.navigateByUrl('page/editar-produto');
  }

  criarProduto(){
    this.storage.set('idAnimal', this.idServico);
    this.router.navigateByUrl('page/criar-produto');
  }

  excluirProduto(id: any){
    this.showLoadingScreen()
      .then(async () => {
        (await this.exameService.deletarProduto(id))
          .subscribe(() => {
            this.getProdutosByServico();
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

  voltar(){
    this.storage.set('idAnimal', this.idServico);
    this.router.navigateByUrl('page/meus-servicos');
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
