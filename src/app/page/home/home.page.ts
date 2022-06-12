import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { ModalController } from '@ionic/angular';
import { FotoperfilPage } from 'src/app/modal/fotoperfil/fotoperfil.page';
import { UrlService } from 'src/app/shared/class/url-service';
import { HomeService } from './home.service';
declare const M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  photo: any;
  user: any;
  gato = 'https://www.petz.com.br/blog/wp-content/uploads/2021/05/gato-branco-de-olho-azul.jpg';
  animais: any;
  public loading: boolean;

  constructor(
    private router: Router,
    private storage: StorageService,
    private urlService: UrlService,
    public modalController: ModalController,
    public homeService: HomeService) {
    this.loading = false;
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/home') {
        this.loading = true;
        this.pageEnter();
      }
    });
  }

  async ngOnInit(){

  }

  async pageEnter(){
    this.user = await this.storage.get('user');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
    this.getAllAnimal();
  }

  async getAllAnimal(){
    (await this.homeService.getAllAnimal()).subscribe((res: any) => {
      this.animais = res;
      this.animais.map(x => {
        if(x.imagem !== null){
          x.img = `data:${x.imagem.tipo};base64,${x.imagem.dados}`;
        }
      });
      console.log(this.animais);
      this.loading = false;
    });
  }

  public detalhesAnimal(id: any){
    this.storage.set('idAnimal', id);
    this.router.navigateByUrl('page/adotar');
  }

}
