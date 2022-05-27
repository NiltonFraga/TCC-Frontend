import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ExameService } from '../exame.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.page.html',
  styleUrls: ['./editar-produto.page.scss'],
})
export class EditarProdutoPage implements OnInit {

  produto: any;
  user: any;

  dataExame: any;
  tipoExame: any;
  publico: any;
  observacoes: any;
  public nome: string;
  public img: string;
  public url: any;
  public valorDesconto: number;
  public valorReal: number;
  public idDono: number;
  public idServico: number;
  public idArquivo: number;
  public arquivo: any;

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
      if (evt instanceof NavigationEnd && this.router.url === '/page/editar-produto') {
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
    await this.getProdutoById();
  }

  async getProdutoById(){
    this.showLoadingScreen()
      .then(async () => {
        (await this.exameService.getProdutoById(this.id))
          .subscribe((resp: any) => {
            this.produto = resp;
            this.id = this.produto.id;
            this.idServico = this.produto.idServico;
            this.url = this.produto.url;
            this.valorDesconto = this.produto.valorDesconto;
            this.valorReal = this.produto.valorReal;
            this.nome = this.produto.nome;
            if(this.produto.imagem !== null){
              this.img = `data:${this.produto.imagem.tipo};base64,${this.produto.imagem.dados}`;
              this.idArquivo = this.produto.imagem.id;
              this.arquivo = {
                name: this.produto.imagem.nome,
                type: this.produto.imagem.tipo,
                binary: this.produto.imagem.dados,
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

  salvarProduto(){
    const request = {
      id: this.id,
      nome: this.nome,
      idServico: this.idServico,
      idDonoProduto: this.user.id,
      idImagem: '',
      url: this.url,
      valorDesconto: this.valorDesconto,
      valorReal: this.valorReal,
      imagem: this.arquivo === undefined ? null : {
        id: this.idArquivo,
        nome: this.arquivo.name,
        tipo: this.arquivo.type,
        dados: this.arquivo.binary,
        guid: ''
      }
    };
    console.log(request);
    this.showLoadingScreen()
      .then(async () => {
        (await this.exameService.updateProduto(request))
          .subscribe(() => {
            this.storage.set('idAnimal', this.idServico);
            this.router.navigateByUrl('/page/meus-produtos');
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
    this.storage.set('idAnimal', this.idServico);
    this.router.navigateByUrl('/page/meus-produtos');
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
