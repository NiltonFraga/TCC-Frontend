import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { LoadingPage } from 'src/app/loading/loading.page';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ClinicasService } from '../clinicas.service';

@Component({
  selector: 'app-editar-post',
  templateUrl: './editar-post.page.html',
  styleUrls: ['./editar-post.page.scss'],
})
export class EditarPostPage implements OnInit {

  public user: any;
  public topico: string;
  public conteudo: string;
  cadastroForm: FormGroup;
  public idPost: number;
  public post: any;

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
      if (evt instanceof NavigationEnd && this.router.url === '/page/editar-post') {
        this.pageEnter();
      }
    });
  }

  async ngOnInit() { }

  async pageEnter(){
    this.user = await this.storage.get('user');
    const token = await this.storage.get('token');
    this.idPost = await this.storage.get('idAnimal');
    await this.urlService.validateToken(token);
    this.getPostById();
  }

  getPostById(){
    this.showLoadingScreen()
      .then(async () => {
        (await this.exameService.getPostById(this.idPost))
          .subscribe(res => {
            console.log(res);
            this.post = res;
            this.cadastroForm.get('topico').setValue(this.post.topico);
            this.cadastroForm.get('conteudo').setValue(this.post.conteudo);
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

  updatePost(){
    const request = {
      id: this.idPost,
      topico: this.cadastroForm.get('topico').value,
      idUsuario: this.user.id,
      conteudo: this.cadastroForm.get('conteudo').value,
    };
    this.showLoadingScreen()
      .then(async () => {
        (await this.exameService.updatePost(request))
          .subscribe(() => {
            this.setNull();
            this.storage.set('idAnimal', this.idPost);
            this.router.navigateByUrl('/page/comentario');
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
    this.storage.set('idAnimal', this.idPost);
    this.router.navigateByUrl('/page/comentario');
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
    this.conteudo = null;
    this.topico = null;
  }
}
