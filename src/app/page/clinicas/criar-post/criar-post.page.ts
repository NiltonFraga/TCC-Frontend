import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ClinicasService } from '../clinicas.service';

@Component({
  selector: 'app-criar-post',
  templateUrl: './criar-post.page.html',
  styleUrls: ['./criar-post.page.scss'],
})
export class CriarPostPage implements OnInit {

  public user: any;
  public topico: string;
  public conteudo: string;
  cadastroForm: FormGroup;

  constructor(
    private exameService: ClinicasService,
    public modalController: ModalController,
    public toastController: ToastController,
    private urlService: UrlService,
    private router: Router,
    private fb: FormBuilder,
    private storage: StorageService)
  {
    this.cadastroForm = this.fb.group({
      topico: this.fb.control('', [Validators.required]),
      conteudo: this.fb.control('', [Validators.required])
    });

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url === '/page/criar-post') {
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

  salvarPost(){
    const request = {
      topico: this.cadastroForm.get('topico').value,
      idUsuario: this.user.id,
      conteudo: this.cadastroForm.get('conteudo').value,
    };
    this.showLoadingScreen()
      .then(async () => {
        (await this.exameService.postPost(request))
          .subscribe(() => {
            this.setNull();
            this.router.navigateByUrl('/page/forum');
          },
          error => {
            this.setNull();
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
    this.router.navigateByUrl('/page/forum');
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
      topico: this.fb.control('', [Validators.required]),
      conteudo: this.fb.control('', [Validators.required])
    });
  }
}
