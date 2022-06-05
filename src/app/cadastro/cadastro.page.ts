import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from '../loading/loading.page';
import { CadastroService } from './cadastro.service';
declare const M: any;


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {


  cadastroForm: FormGroup;
  public tipo = '';

  constructor(
    public toastController: ToastController,
    public modalController: ModalController,
    private cadastroService: CadastroService,
    private fb: FormBuilder,
    private router: Router) {

    this.cadastroForm = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      perfil: this.fb.control('', [Validators.required]),
      documento: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      telefone1: this.fb.control('', [Validators.required]),
      telefone2: this.fb.control(''),
      senha: this.fb.control('', [Validators.required]),
      confimeSenha: this.fb.control('', [Validators.required])
    });
  }

  ngOnInit() {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});

    this.cadastroForm = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      perfil: this.fb.control('', [Validators.required]),
      documento: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      telefone1: this.fb.control('', [Validators.required]),
      telefone2: this.fb.control(''),
      senha: this.fb.control('', [Validators.required]),
      confimeSenha: this.fb.control('', [Validators.required])
    });
  }

  async cadastrar(){
    if(this.cadastroForm.get('senha').value !== this.cadastroForm.get('confimeSenha').value){
      this.toastController.create({
        message: 'As senhas não coincidem',
        duration: 2000
      }).then(toast => {
        toast.present();
      });
      return;
    }

    if(this.cadastroForm.get('perfil').value === 'pessoa_fisica' && this.cadastroForm.get('documento').value.toString().length !== 11){
      this.toastController.create({
        message: 'Campo CPF com valor incorreto',
        duration: 2000
      }).then(toast => {
        toast.present();
      });
      return;
    }

    if(this.cadastroForm.get('perfil').value === 'pessoa_juridica' && this.cadastroForm.get('documento').value.toString().length !== 14){
      this.toastController.create({
        message: 'Campo CNPF com valor incorreto',
        duration: 2000
      }).then(toast => {
        toast.present();
      });
      return;
    }

    const request = {
      nome: this.cadastroForm.get('nome').value,
      documento: this.cadastroForm.get('documento').value.toString(),
      email: this.cadastroForm.get('email').value,
      telefone1: this.cadastroForm.get('telefone1').value.toString(),
      telefone2: this.cadastroForm.get('telefone2').value.toString(),
      senha: this.cadastroForm.get('senha').value,
      foto: 'asdjnasodfajsdiufasidufniubwiefubri',
      role: this.cadastroForm.get('perfil').value,
    };

    console.log(request);

    (await this.cadastroService.cadastrar(request))
      .subscribe(() => {
        this.toastController.create({
          message: 'Cadastrado!',
          duration: 2000
        }).then(toast => {
          toast.present();
          this.router.navigateByUrl('/login');
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
}
