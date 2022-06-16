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
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.page.html',
  styleUrls: ['./editar-produto.page.scss'],
})
export class EditarProdutoPage implements OnInit {

  produto: any;
  user: any;
  statusFoto: string;

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
    this.statusFoto = 'Alterar Imagem';
    this.cadastroForm = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      valorReal: this.fb.control('', [Validators.required]),
      valorDesconto: this.fb.control('', [Validators.required]),
      url: this.fb.control('', [Validators.required])
    });
    this.arquivo = null;
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
            this.cadastroForm.get('url').setValue(this.produto.url);
            this.cadastroForm.get('valorDesconto').setValue(this.produto.valorDesconto);
            this.cadastroForm.get('valorReal').setValue(this.produto.valorReal);
            this.cadastroForm.get('nome').setValue(this.produto.nome);
            if(this.produto.imagem !== null){
              this.img = `data:${this.produto.imagem.tipo};base64,${this.produto.imagem.dados}`;
              this.idArquivo = this.produto.imagem.id;
              this.arquivo = {
                name: this.produto.imagem.nome,
                type: this.produto.imagem.tipo,
                binary: this.produto.imagem.dados,
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

  salvarProduto(){
    const request = {
      id: this.id,
      nome: this.cadastroForm.get('nome').value,
      idServico: this.idServico,
      idDonoProduto: this.user.id,
      idImagem: '',
      url: this.cadastroForm.get('url').value,
      valorDesconto: this.cadastroForm.get('valorDesconto').value,
      valorReal: this.cadastroForm.get('valorReal').value,
      imagem: this.arquivo === undefined ? null : {
        id: this.idArquivo,
        nome: this.arquivo.name,
        tipo: this.arquivo.type,
        dados: this.arquivo.binary,
        guid: ''
      }
    };
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

  async mudarFoto(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      direction: CameraDirection.Rear,
      source: CameraSource.Camera,
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

  setNull(){

  }

}
