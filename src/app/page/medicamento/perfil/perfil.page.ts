import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { MedicamentoService } from '../medicamento.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss']
})
export class PerfilPage implements OnInit {

  public user: any;
  public usuario: any;
  public loading: boolean;
  public mensagem: string;

  constructor(
    private router: Router,
    private storage: StorageService,
    private urlService: UrlService,
    public modalController: ModalController,
    public toastController: ToastController,
    private medicamentoService: MedicamentoService) {
    this.loading = false;
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === `/page/perfil`) {
        this.loading = true;
        this.pageEnter();
      }
    });
  }


  async pageEnter(){
    this.user = await this.storage.get('user');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
    this.getUsuario();
  }

  async getUsuario(){
    this.showLoadingScreen()
      .then(async () => {
        (await this.medicamentoService.getUsuario(this.user.id))
          .subscribe((resp: any) => {
            this.usuario = resp;
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

  public editarUsuario(){
    this.router.navigateByUrl('page/editar-perfil');
  }

  ngOnInit() {
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
