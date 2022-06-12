import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { MedicamentoService } from '../medicamento.service';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { UrlService } from 'src/app/shared/class/url-service';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-medicamento',
  templateUrl: './criar-medicamento.page.html',
  styleUrls: ['./criar-medicamento.page.scss'],
})
export class CriarMedicamentoPage implements OnInit {

  user: any;
  public cadastroForm: FormGroup;
  public arquivo: any;

  constructor(
    private medicamentoService: MedicamentoService,
    public modalController: ModalController,
    public toastController: ToastController,
    private document: DocumentViewer,
    private urlService: UrlService,
    private router: Router,
    private fb: FormBuilder,
    private storage: StorageService)
  {
    this.cadastroForm = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      idade: this.fb.control(''),
      peso: this.fb.control('', [Validators.required]),
      tipo: this.fb.control('', [Validators.required]),
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
      ativo: this.fb.control('true', [Validators.required]),
      file: this.fb.control('', [Validators.required])
    });

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/criar-pet') {
         this.pageEnter();
      }
    });
  }

  async ngOnInit() {
  }

  async pageEnter(){
    this.user = await this.storage.get('user');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
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

  cancelar(){
    this.setNull();
    this.router.navigateByUrl('/page/minha-area');
  }

  salvarAnimal(){
    const request = {
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
        nome: this.arquivo.name,
        tipo: this.arquivo.type,
        dados: this.arquivo.binary
      }
    };
    this.showLoadingScreen()
      .then(async () => {
        (await this.medicamentoService.postAnimal(request))
          .subscribe(() => {
            this.setNull();
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

  setNull(){
    this.cadastroForm = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      idade: this.fb.control(''),
      peso: this.fb.control('', [Validators.required]),
      tipo: this.fb.control('', [Validators.required]),
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
      ativo: this.fb.control('true', [Validators.required]),
      file: this.fb.control('', [Validators.required])
    });
  }

}
