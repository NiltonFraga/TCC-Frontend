import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      sobreDesconto: this.fb.control('', [Validators.required])
    });

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
            this.cadastroForm.get('nome').setValue(this.servicos.nome);
            this.cadastroForm.get('telefone1').setValue(this.servicos.telefone1);
            this.cadastroForm.get('telefone2').setValue(this.servicos.telefone2);
            this.cadastroForm.get('rua').setValue(this.servicos.rua);
            this.cadastroForm.get('bairro').setValue(this.servicos.bairro);
            this.cadastroForm.get('cidade').setValue(this.servicos.cidade);
            this.cadastroForm.get('tipoDesconto').setValue(this.servicos.tipo);
            this.cadastroForm.get('sobreLoja').setValue(this.servicos.descricao);
            this.cadastroForm.get('sobreDesconto').setValue(this.servicos.desconto);
            if(this.servicos.imagem !== null){
              this.img = `data:${this.servicos.imagem.tipo};base64,${this.servicos.imagem.dados}`;
              this.idArquivo = this.servicos.imagem.id;
              this.arquivo = {
                name: this.servicos.imagem.nome,
                type: this.servicos.imagem.tipo,
                binary: this.servicos.imagem.dados,
              };
            };
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
      nome: this.cadastroForm.get('nome').value,
      telefone1: this.cadastroForm.get('telefone1').value,
      telefone2: this.cadastroForm.get('telefone2').value,
      rua: this.cadastroForm.get('rua').value,
      bairro: this.cadastroForm.get('bairro').value,
      cidade: this.cadastroForm.get('cidade').value,
      tipo: this.cadastroForm.get('tipoDesconto').value,
      descricao: this.cadastroForm.get('sobreLoja').value,
      desconto: this.cadastroForm.get('sobreDesconto').value,
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
