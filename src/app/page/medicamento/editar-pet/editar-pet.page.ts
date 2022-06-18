import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { MedicamentoService } from '../medicamento.service';
import { Camera, CameraDirection, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-editar-pet',
  templateUrl: './editar-pet.page.html',
  styleUrls: ['./editar-pet.page.scss']
})
export class EditarPetPage implements OnInit {

  public user: any;
  public animal: any;
  public loading: boolean;
  gato = 'https://www.petz.com.br/blog/wp-content/uploads/2021/05/gato-branco-de-olho-azul.jpg';
  cadastroForm: FormGroup;
  public nome: string;
  arquivo: any;
  idAnimal: number;
  idArquivo: number;
  img: any;
  idDoador: number;
  statusFoto: string;

  constructor(
    private router: Router,
    private storage: StorageService,
    private urlService: UrlService,
    public modalController: ModalController,
    public toastController: ToastController,
    private medicamentoService: MedicamentoService,
    private fb: FormBuilder) {
    this.loading = false;
    this.statusFoto = 'Alterar Imagem';
    this.cadastroForm = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      idade: this.fb.control(''),
      peso: this.fb.control('', [Validators.required]),
      pelagem: this.fb.control('', [Validators.required]),
      sexo: this.fb.control('', [Validators.required]),
      vermifugado: this.fb.control('', [Validators.required]),
      vacina: this.fb.control('', [Validators.required]),
      doenca: this.fb.control('', [Validators.required]),
      descricao: this.fb.control('', [Validators.required]),
      castrado: this.fb.control('', [Validators.required]),
      rua: this.fb.control('', [Validators.required]),
      bairro: this.fb.control('', [Validators.required]),
      cidade: this.fb.control('', [Validators.required]),
      tipo: this.fb.control('', [Validators.required]),
      ativo: this.fb.control('', [Validators.required])
    });
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === `/page/editar-pet`) {
        this.loading = true;
        this.pageEnter();
      }
    });
  }


  async pageEnter(){
    this.user = await this.storage.get('user');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
    const id = await this.storage.get('idAnimal');
    await this.getAnimalById(id);
  }

  async getAnimalById(id){
    (await this.medicamentoService.getAnimalById(id)).subscribe((res: any) => {
      this.animal = res;
      this.idAnimal = this.animal.id;
      this.idDoador = this.animal.idDoador;
      this.cadastroForm.get('nome').setValue(this.animal.nome);
      this.cadastroForm.get('idade').setValue(this.animal.idade);
      this.cadastroForm.get('tipo').setValue(this.animal.tipo);
      this.cadastroForm.get('pelagem').setValue(this.animal.pelagem);
      this.cadastroForm.get('peso').setValue(this.animal.peso);
      this.cadastroForm.get('sexo').setValue(this.animal.sexo);
      this.cadastroForm.get('vermifugado').setValue(this.animal.vermifugado);
      this.cadastroForm.get('vacina').setValue(this.animal.vacina);
      this.cadastroForm.get('doenca').setValue(this.animal.doenca);
      this.cadastroForm.get('descricao').setValue(this.animal.descricao);
      this.cadastroForm.get('castrado').setValue(this.animal.castrado);
      this.cadastroForm.get('rua').setValue(this.animal.rua);
      this.cadastroForm.get('bairro').setValue(this.animal.bairro);
      this.cadastroForm.get('cidade').setValue(this.animal.cidade);
      this.cadastroForm.get('ativo').setValue(this.animal.ativo);
      if(this.animal.imagem !== null){
        this.img = `data:${this.animal.imagem.tipo};base64,${this.animal.imagem.dados}`;
        this.idArquivo = this.animal.imagem.id;
        this.arquivo = {
          name: this.animal.imagem.nome,
          type: this.animal.imagem.tipo,
          binary: this.animal.imagem.dados,
        };
      };
      this.loading = false;
    });
  }

  salvarAnimal(){
    const request = {
      id: this.idAnimal,
      nome: this.cadastroForm.get('nome').value,
      tipo: this.cadastroForm.get('tipo').value,
      idade: this.cadastroForm.get('idade').value,
      sexo: this.cadastroForm.get('sexo').value,
      peso: this.cadastroForm.get('peso').value,
      pelagem: this.cadastroForm.get('pelagem').value,
      castrado: this.cadastroForm.get('castrado').value,
      vermifugado: this.cadastroForm.get('vermifugado').value,
      doenca: this.cadastroForm.get('doenca').value,
      vacina: this.cadastroForm.get('vacina').value,
      descricao: this.cadastroForm.get('descricao').value,
      doador: this.user.id,
      rua: this.cadastroForm.get('rua').value,
      bairro: this.cadastroForm.get('bairro').value,
      cidade: this.cadastroForm.get('cidade').value,
      ativo: this.cadastroForm.get('ativo').value,
      idImagem: '',
      imagem: this.arquivo === undefined ? null : {
        id: this.idArquivo,
        nome: this.cadastroForm.get('nome').value,
        tipo: this.arquivo.type,
        dados: this.arquivo.binary
      }
    };
    this.showLoadingScreen()
      .then(async () => {
        (await this.medicamentoService.updateAnimal(request))
          .subscribe(() => {
            this.router.navigateByUrl('/page/minha-area');
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
                this.closeLoadingScreen();
              });
            }
          },
          () => {
            this.closeLoadingScreen();
          });
      });
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

  public cancelar(){
    this.router.navigateByUrl('page/minha-area');
  }

  ngOnInit() {
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
