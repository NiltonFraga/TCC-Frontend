import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  //loading: boolean = false;
  mensagem: string;
  user: any;

  constructor(
    private router: Router,
    private storage: StorageService,
    private urlService: UrlService,
    private consultaService: ConsultaService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/chat') {
        //this.loading = true;
        this.pageEnter();
      }
    });
  }

  ngOnInit() {
  }

  async pageEnter(){
    this.user = await this.storage.get('user');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
  }

  falarCom(){
    this.router.navigateByUrl('page/mensagem');
  }
}
