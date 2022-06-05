import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ExameService } from '../exame.service';

@Component({
  selector: 'app-criar-exame',
  templateUrl: './criar-exame.page.html',
  styleUrls: ['./criar-exame.page.scss'],
})
export class CriarExamePage implements OnInit {

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
  public cadastroForm: FormGroup;

  constructor(
    private exameService: ExameService,
    public modalController: ModalController,
    public toastController: ToastController,
    private urlService: UrlService,
    private router: Router,
    private storage: StorageService,
    private fb: FormBuilder)
  {
    this.cadastroForm = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      telefone1: this.fb.control('', [Validators.required]),
      telefone2: this.fb.control(''),
      rua: this.fb.control('', [Validators.required]),
      bairro: this.fb.control('', [Validators.required]),
      cidade: this.fb.control('', [Validators.required]),
      tipoDesconto: this.fb.control('', [Validators.required]),
      sobreLoja: this.fb.control('', [Validators.required]),
      sobreDesconto: this.fb.control('', [Validators.required]),
      file: this.fb.control('', [Validators.required])
    });

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/criar-servicos') {
         this.pageEnter();
      }
    });
  }

  async ngOnInit() { }

  async pageEnter(){
    this.user = await this.storage.get('user');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
  }

  async getServicosByUsuario(){
    this.showLoadingScreen()
      .then(async () => {
        (await this.exameService.getServicosByUsuario(this.user.id))
          .subscribe((resp: any) => {
            this.servicos = resp;
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
      nome: this.cadastroForm.get('nome').value,
      telefone1: this.cadastroForm.get('telefone1').value.toString(),
      telefone2: this.cadastroForm.get('telefone2').value.toString(),
      rua: this.cadastroForm.get('rua').value,
      bairro: this.cadastroForm.get('bairro').value,
      cidade: this.cadastroForm.get('cidade').value,
      tipo: this.cadastroForm.get('tipoDesconto').value,
      descricao: this.cadastroForm.get('sobreLoja').value,
      desconto: this.cadastroForm.get('sobreDesconto').value,
      donoServico: this.user.id,
      idImagem: '',
      imagem: this.arquivo === undefined ? null : {
        nome: this.arquivo.name,
        tipo: this.arquivo.type,
        dados: this.arquivo.binary
      }
    };
    this.showLoadingScreen()
      .then(async () => {
        (await this.exameService.postServico(request))
          .subscribe(() => {
            this.router.navigateByUrl('/page/servicos');
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
    this.router.navigateByUrl('/page/servicos');
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

  // async salvarExame(){
  //   this.showLoadingScreen()
  //     .then(async () => {
  //       let request = {
  //         arquivo: this.arquivo == undefined ? null : {
  //           nome: this.arquivo.name,
  //           tipo: this.arquivo.type,
  //           binario: this.arquivo.binary
  //         },
  //         dataRealizacao: this.dataExame.split("T")[0],
  //         idPaciente: this.user.id,
  //         idTipoExame: this.tipoExame,
  //         publico: this.publico,
  //         observacoes: this.observacoes
  //       };

  //       this.arquivo = undefined;
  //       this.dataExame = undefined;
  //       this.tipoExame = undefined;
  //       this.publico = false;
  //       this.observacoes = undefined;

  //       (await this.exameService.salvarExame(request))
  //         .subscribe(() => {
  //           this.router.navigateByUrl("/page/exames");
  //         },
  //         error => {
  //           if(error.status == 401 || error.status == 403){
  //             this.storage.remove("user");
  //             this.router.navigateByUrl("");
  //           }else{
  //             this.toastController.create({
  //               message: error.error,
  //               duration: 5000
  //             }).then(toast => {
  //               toast.present();
  //             });
  //           }
  //         },
  //         () => {
  //           this.closeLoadingScreen();
  //         });
  //     });
  // }

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
