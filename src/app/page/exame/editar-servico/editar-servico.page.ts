import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ExameService } from '../exame.service';

@Component({
  selector: 'app-editar-servico',
  templateUrl: './editar-servico.page.html',
  styleUrls: ['./editar-servico.page.scss'],
})
export class EditarServicoPage implements OnInit {

  servicos: any;
  user: any;

  dataExame: any;
  tipoExame: any;
  publico: any;
  observacoes: any;
  public nome: string;
  public arquivo: any;
  public telefone1: string;
  public telefone2: string;
  public rua: string;
  public bairro: string;
  public cidade: string;
  public tipoDesconto: string;
  public sobreLoja: string;
  public sobreDesconto: string;
  public img: string;
  public idServico: number;
  public idArquivo: number;

  public id: any;

  constructor(
    private exameService: ExameService,
    public modalController: ModalController,
    public toastController: ToastController,
    private urlService: UrlService,
    private router: Router,
    private storage: StorageService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/editar-servicos') {
         this.pageEnter();
      }
    });
  }

  async ngOnInit() { }

  async pageEnter(){
    this.user = await this.storage.get('user');
    this.id = await this.storage.get('idAnimal');
    console.log(this.user);
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
    await this.getServicosByUsuario();
  }

  async getServicosByUsuario(){
    this.showLoadingScreen()
      .then(async () => {
        (await this.exameService.getServicoById(this.id))
          .subscribe((resp: any) => {
            this.servicos = resp;
            this.idServico = this.servicos.id;
            this.nome = this.servicos.nome;
            this.telefone1 = this.servicos.telefone1;
            this.telefone2 = this.servicos.telefone2;
            this.rua = this.servicos.rua;
            this.bairro = this.servicos.bairro;
            this.cidade = this.servicos.cidade;
            this.tipoDesconto = this.servicos.tipo;
            this.sobreLoja = this.servicos.descricao;
            this.sobreDesconto = this.servicos.desconto;
            this.tipoDesconto = this.servicos.tipo;
            this.tipoDesconto = this.servicos.tipo;
            if(this.servicos.imagem !== null){
              this.img = `data:${this.servicos.imagem.tipo};base64,${this.servicos.imagem.dados}`;
              this.idArquivo = this.servicos.imagem.id;
              this.arquivo = {
                name: this.servicos.imagem.nome,
                type: this.servicos.imagem.tipo,
                binary: this.servicos.imagem.dados,
              };
            };
            console.log(resp);
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

  salvarServico(){
    const request = {
      id: this.idServico,
      nome: this.nome,
      telefone1: this.telefone1,
      telefone2: this.telefone2,
      rua: this.rua,
      bairro: this.bairro,
      cidade: this.cidade,
      tipo: this.tipoDesconto,
      descricao: this.sobreLoja,
      desconto: this.sobreDesconto,
      donoServico: this.user.id,
      idImagem: '',
      imagem: this.arquivo === undefined ? null : {
        id: this.idArquivo,
        nome: this.arquivo.name,
        tipo: this.arquivo.type,
        dados: this.arquivo.binary
      }
    };
    this.showLoadingScreen()
      .then(async () => {
        (await this.exameService.updateServico(request))
          .subscribe(() => {
            this.router.navigateByUrl('/page/meus-servicos');
          },
          error => {
            if(error.status === 401 || error.status === 403){
              this.storage.remove('user');
              this.router.navigateByUrl('');
            }else{
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

  cancelar(){
    this.router.navigateByUrl('/page/meus-servicos');
  }

  fileChange(e){
    const arquivoPre = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(arquivoPre);
    reader.onload = () => {
      this.arquivo = {
        name: arquivoPre.name,
        type: arquivoPre.type,
        binary: reader.result.toString().split(';')[1].split(',')[1]
      };
    };
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
