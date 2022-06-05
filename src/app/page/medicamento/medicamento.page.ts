import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MedicamentoViewPage } from 'src/app/modal/medicamento-view/medicamento-view.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ExameService } from '../exame/exame.service';
import { MedicamentoService } from './medicamento.service';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.page.html',
  styleUrls: ['./medicamento.page.scss'],
})
export class MedicamentoPage implements OnInit {

  animais: any;
  loading: boolean;
  mensagem: string;
  gato = 'https://www.petz.com.br/blog/wp-content/uploads/2021/05/gato-branco-de-olho-azul.jpg';

  constructor(
    private router: Router,
    private storage: StorageService,
    private urlService: UrlService,
    private modalController: ModalController,
    private medicamentoService: MedicamentoService)
  {
    this.loading = false;
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/minha-area') {
        this.loading = true;
        this.pageEnter();
      }
    });
  }

  ngOnInit() {}

  async pageEnter(){
    const user = await this.storage.get('user');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);

    (await this.medicamentoService.getAnimaisByUsuario(user.id))
      .subscribe((resp: any) => {
        this.animais = resp;

        if(this.animais.length === 0){
          this.mensagem = 'Não há nenhum animal para adoção';
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

  public detalhesAnimal(id: any){
    this.storage.set('idAnimal', id);
    this.router.navigateByUrl('page/editar-pet');
  }

  // async abrirMedicamento(id: string){
  //   const loadingScreen = await this.modalController.create({
  //     component: MedicamentoViewPage,
  //     componentProps: {
  //       id: id
  //     }
  //   });

  //   loadingScreen.onDidDismiss()
  //     .then(async () => {});

  //   return await loadingScreen.present();
  // }

}
