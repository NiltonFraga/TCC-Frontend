import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { interval, Subscription } from 'rxjs';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-criar-consulta',
  templateUrl: './criar-consulta.page.html',
  styleUrls: ['./criar-consulta.page.scss'],
})
export class CriarConsultaPage implements OnInit {

  user: any;
  destinatarioId: any;
  destinatario: any;
  conversas: any[];
  menssagem: string;

  subscription: Subscription;

  constructor(
    private consultaService: ConsultaService,
    public modalController: ModalController,
    public toastController: ToastController,
    private urlService: UrlService,
    private router: Router,
    private storage: StorageService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/mensagem') {
         this.pageEnter();
      }else{
        if(this.subscription && !this.subscription.closed){
          this.subscription.unsubscribe();
        }
      }
    });
  }

  async ngOnInit() {

  }

  async pageEnter(){
    this.user = await this.storage.get('user');
    this.destinatario = await this.storage.get('destinatario');
    this.destinatarioId = await this.storage.get('destinatarioId');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
    this.getAllConversas();
  }

  async getAllConversas(){
    const request = {
      usuarioOrigem: this.user.id,
      usuarioDestino: this.destinatarioId,
      menssagem: ''
    };

    (await this.consultaService.getAllConversas(request)).subscribe((res: any) => {
      this.conversas = res;
      const source = interval(1000);
      this.subscription = source.subscribe(() => {
        this.getByDestino();
      });
    });
  }

  async getByDestino(){
    const request = {
      usuarioOrigem: this.user.id,
      usuarioDestino: this.destinatarioId,
      menssagem: ''
    };

    (await this.consultaService.getByDestino(request)).subscribe((res: any) => {
      if(res && res.length > 0){
        this.conversas = this.conversas.concat(res);
      }
    });
  }

  async postConversa(){
    if(this.menssagem !== ''){
      const request = {
        usuarioOrigem: this.user.id,
        usuarioDestino: this.destinatarioId,
        menssagem: this.menssagem
      };

      this.conversas.push({
        usuarioOrigem: this.user.id,
        usuarioDestino: this.destinatarioId,
        menssagem: this.menssagem,
        dataCriacao: new Date(),
        leitura: true,
      });

      this.menssagem = '';

      (await this.consultaService.postConversa(request)).subscribe(() => {});
    }
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
