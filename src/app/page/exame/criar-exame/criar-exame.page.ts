import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ExameService } from '../exame.service';
import { Camera, CameraDirection, CameraResultType, CameraSource } from '@capacitor/camera';

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
  public img: any;
  public statusFoto: string;

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

    this.statusFoto = 'Insira a Imagem';

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
    if(!this.arquivo){
      this.toastController.create({
        message: 'A Imagem é obrigatôria',
        duration: 3000
      }).then(toast => {
        toast.present();
      });
      return;
    };

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
        nome: this.cadastroForm.get('nome').value,
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

  async mudarFoto(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      direction: CameraDirection.Rear,
source: CameraSource.Photos,
      resultType: CameraResultType.DataUrl
    });

    const photoObj = image.dataUrl;

    this.arquivo = {
      type: this.getTypePhoto(photoObj),
      binary: this.getBinaryPhoto(photoObj)
    };

    if(this.arquivo){
      this.statusFoto = 'Alterar Imagem';
      this.img = `data:${this.arquivo.typo};base64,${this.arquivo.binary}`;
    };
  }

  getTypePhoto(photo: any): string{
    return photo.split(';')[0].split(':')[1];
  }

  getBinaryPhoto(photo: any): any{
    return photo.split(';')[1].split(',')[1];
  }

}
