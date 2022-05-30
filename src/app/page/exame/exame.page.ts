import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ExameService } from './exame.service';

@Component({
  selector: 'app-exame',
  templateUrl: './exame.page.html',
  styleUrls: ['./exame.page.scss'],
})
export class ExamePage implements OnInit {

  servicos: any;
  foto = 'https://scontent.fsdu15-1.fna.fbcdn.net/v/t1.6435-9/173246721_1109225312820513_6797640485221109157_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHxv9P3vxN2ECLC28mmIHy1ZceYjGMwe4hlx5iMYzB7iKidkYOuzm1Hw3L1WyH-Hzh-5vtReM-bAQWjgd0Z_qUu&_nc_ohc=4MaH5D1ZvrIAX9iecDQ&_nc_ht=scontent.fsdu15-1.fna&oh=00_AT-wMwuvzScMEiI1zKHE4KAeEOcDXx-OlzG65ggb2Fv7sQ&oe=62B1DFBE';
  loading: boolean;
  mensagem: string;
  public user: any;

  constructor(
    private router: Router,
    private storage: StorageService,
    private urlService: UrlService,
    private exameService: ExameService)
  {
    this.loading = false;
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/exames') {
        this.loading = true;
         this.pageEnter();
      }
    });
  }

  ngOnInit() {}

  async pageEnter(){
    this.user = await this.storage.get('user');
    console.log(this.user);
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);

    (await this.exameService.getAllServico())
      .subscribe((resp: any) => {
        this.servicos = resp;
        this.servicos.map(x => {
          if(x.imagem !== null){
            x.img = `data:${x.imagem.tipo};base64,${x.imagem.dados}`;
          }
        });
        console.log(resp);

        if(this.servicos.length === 0){
          this.mensagem = 'Nenhum serviço cadastrado';
        }

        this.loading = false;
      },
      error => {
        if(error.status === 401 || error.status === 403){
          this.storage.remove('user');
          this.router.navigateByUrl('');
        }
        this.mensagem = error.error;
        this.loading = false;
      });
  }

  ciarNovoServico(){
    this.router.navigateByUrl('page/criar-exame');
  }

  verMeusServico(){
    this.router.navigateByUrl('page/meus-servicos');
  }

  verProdutos(id: any){
    this.storage.set('idAnimal', id);
    this.router.navigateByUrl('page/produtos');
  }
}
