import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-adotar',
  templateUrl: './adotar.page.html',
  styleUrls: ['./adotar.page.scss']
})
export class AdotarPage implements OnInit {

  public user: any;
  public animal: any;
  public loading: boolean;
  gato = 'https://www.petz.com.br/blog/wp-content/uploads/2021/05/gato-branco-de-olho-azul.jpg';

  constructor(
    private router: Router,
    private storage: StorageService,
    private urlService: UrlService,
    public homeService: HomeService) {
    this.loading = false;
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === `/page/adotar`) {
        this.loading = true;
        this.pageEnter();
      }
    });
  }

  async pageEnter(){
    this.user = await this.storage.get('user');
    const id = await this.storage.get('idAnimal');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
    await this.getAnimalById(id);
  }

  async getAnimalById(id){
    (await this.homeService.getAnimalById(id)).subscribe((res: any) => {
      this.animal = res;
      if(this.animal.imagem !== null){
        this.animal.img = `data:${this.animal.imagem.tipo};base64,${this.animal.imagem.dados}`;
      }
      this.loading = false;
    });
  }

  irParaMeusFavoritos(){
    this.router.navigateByUrl('page/pets-favoritos');
  }

  ngOnInit() {
  }

  async favoritarAnimal(id){
    const request = {
      idAnimal: id,
      idUsuario: this.user.id
    };
    (await this.homeService.favoritarAnimal(request)).subscribe(() => {
      this.loading = true;
      this.getAnimalById(id);
      this.loading = false;
    });
  }
}
