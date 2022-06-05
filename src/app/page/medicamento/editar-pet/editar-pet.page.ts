import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { MedicamentoService } from '../medicamento.service';

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
  animalForm: FormGroup;
  public nome: string;

  constructor(
    private router: Router,
    private storage: StorageService,
    private urlService: UrlService,
    private medicamentoService: MedicamentoService,
    private fb: FormBuilder) {
    this.loading = false;
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
    (await this.medicamentoService.getAnimalById(id)).subscribe((res: any) => {
      console.log(res);
      this.animal = res;
      this.animalForm = this.fb.group({
        nome: this.fb.control(this.animal.nome, [Validators.required]),
        idade: this.fb.control(this.animal.idade, [Validators.required]),
        peso: this.fb.control(this.animal.peso, [Validators.required]),
        pelagem: this.fb.control(this.animal.pelagem, [Validators.required]),
        sexo: this.fb.control(this.animal.sexo, [Validators.required]),
        vermifugado: this.fb.control(this.animal.vermifugado, [Validators.required]),
        vacina: this.fb.control(this.animal.vacina, [Validators.required]),
        doenca: this.fb.control(this.animal.doenca, [Validators.required]),
        descricao: this.fb.control(this.animal.descricao, [Validators.required]),
        castrado: this.fb.control(this.animal.castrado, [Validators.required]),
        rua: this.fb.control(this.animal.rua, [Validators.required]),
        bairro: this.fb.control(this.animal.bairro, [Validators.required]),
        cidade: this.fb.control(this.animal.cidade, [Validators.required]),
        ativo: this.fb.control(this.animal.ativo, [Validators.required])
      });
      this.loading = false;
    });
  }

  public cancelar(){
    this.router.navigateByUrl('page/minha-area');
  }

  public atualizar(){
    this.router.navigateByUrl('page/minha-area');
  }

  ngOnInit() {
  }

}
