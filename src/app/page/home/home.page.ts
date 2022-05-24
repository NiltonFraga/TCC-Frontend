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
    this.getAllAnimal();
    //let token = await this.storage.get('token');
    //await this.urlService.validateToken(token);
  }

  async getAllAnimal(){
    (await this.homeService.getAllAnimal()).subscribe((res: any) => {
      console.log(res);
      this.animais = res;
      this.loading = false;
    });
  }

  // async openPhoto() {
  //   const loadingScreen = await this.modalController.create({
  //     component: FotoperfilPage
  //   });

  //   loadingScreen.onDidDismiss()
  //     .then(async (data: any) => {
  //       const userReturn = data['data'];
  //       this.user = userReturn;
  //       await this.storage.set('user', this.user);
  //     });

  //   return await loadingScreen.present();
  // }

  public detalhesAnimal(id: any){
    this.storage.set('idAnimal', id);
    this.router.navigateByUrl('page/adotar');
    //this.router.navigate(['page/adotar', id]);
  }

}
