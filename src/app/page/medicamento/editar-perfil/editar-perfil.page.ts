import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { MedicamentoService } from '../medicamento.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  user: any;
  public id: any;
  public cadastroForm: FormGroup;
  usuario: any;

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    private urlService: UrlService,
    private medicamentoService: MedicamentoService,
    private router: Router,
    private storage: StorageService,
    private fb: FormBuilder)
  {
    this.cadastroForm = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
      telefone1: this.fb.control('', [Validators.required]),
      telefone2: this.fb.control(''),
      senha: this.fb.control(''),
      confimeSenha: this.fb.control(''),
    });
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/editar-perfil') {
         this.pageEnter();
      }
    });
  }

  async ngOnInit() { }

  async pageEnter(){
    this.user = await this.storage.get('user');
    const token = await this.storage.get('token');
    await this.urlService.validateToken(token);
    await this.getUsuario();
  }

  async getUsuario(){
    this.showLoadingScreen()
      .then(async () => {
        (await this.medicamentoService.getUsuario(this.user.id))
          .subscribe((resp: any) => {
            this.usuario = resp;
            this.cadastroForm.get('nome').setValue(this.usuario.nome);
            this.cadastroForm.get('email').setValue(this.usuario.email);
            this.cadastroForm.get('telefone1').setValue(this.usuario.telefone1);
            this.cadastroForm.get('telefone2').setValue(this.usuario.telefone2);
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

  salvarUsuario(){
    if(this.cadastroForm.get('senha').value !== this.cadastroForm.get('confimeSenha').value){
      this.toastController.create({
        message: 'As senhas não coincidem',
        duration: 2000
      }).then(toast => {
        toast.present();
      });
      return;
    }

    const request = {
      id: this.user.id,
      nome: this.cadastroForm.get('nome').value,
      email: this.cadastroForm.get('email').value,
      telefone1: this.cadastroForm.get('telefone1').value,
      telefone2: this.cadastroForm.get('telefone2').value,
      senha:  this.cadastroForm.get('senha').value
    };
    this.showLoadingScreen()
      .then(async () => {
        (await this.medicamentoService.updateCredenciais(request))
          .subscribe(() => {
            this.setNull();
            this.router.navigateByUrl('/page/perfil');
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
    this.setNull();
    this.router.navigateByUrl('/page/perfil');
  }

  setNull(){
    this.cadastroForm = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
      telefone1: this.fb.control('', [Validators.required]),
      telefone2: this.fb.control(''),
      senha: this.fb.control(''),
      confimeSenha: this.fb.control(''),
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
}
