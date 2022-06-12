import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { MedicamentoService } from '../medicamento.service';

@Component({
  selector: 'app-pet-favorito',
  templateUrl: './pet-favorito.page.html',
  styleUrls: ['./pet-favorito.page.scss']
})
export class PetFavoritoPage implements OnInit {

  public user: any;
  public animais: any;
  public loading: boolean;
  public mensagem: string;

  constructor(
    private router: Router,
    private storage: StorageService,
    private urlService: UrlService,
    public modalController: ModalController,
    public toastController: ToastController,
    private medicamentoService: MedicamentoService,
    private fb: FormBuilder) {
    this.loading = false;
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === `/page/pets-favoritos`) {
        this.loading = true;
        this.pageEnter();
      }
    });
  }


  async pageEnter(){
    this.user = await this.storage.get('user');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
    await this.getAnimaisFavorito();
  }

  async getAnimaisFavorito(){
    (await this.medicamentoService.getAnimaisFavorito(this.user.id)).subscribe((res: any) => {
      this.animais = res;
      this.animais.map(x => {
        if(x.imagem !== null){
          x.img = `data:${x.imagem.tipo};base64,${x.imagem.dados}`;
        }
      });

      if(this.animais.length === 0){
        this.mensagem = 'Não há nenhum animal favoritado';
      }

      this.loading = false;
    });
  }

  public detalhesAnimal(id){
    this.storage.set('idAnimal', id);
    this.router.navigateByUrl('page/adotar');
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
