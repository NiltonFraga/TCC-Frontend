import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
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

  tiposConsultas: any;
  user: any;

  dataConsulta: any;
  tipoConsulta: any;
  publico: any;
  resumo: any;
  observacoes: any;

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
      }
    });
  }

  async ngOnInit() {}

  async pageEnter(){
    this.user = await this.storage.get('user');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
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
