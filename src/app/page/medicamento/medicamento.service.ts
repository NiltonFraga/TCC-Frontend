import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  constructor(private urlService: UrlService) { }

  async getAnimaisByUsuario(id: string){
    return await this.urlService.sendRequestPost('/Animal/GetAnimaisByUsuario?id='+id);
  }

  async getAnimalById(id: any = ''): Promise<any>{
    return  await this.urlService.sendRequestPost('/Animal/GetAnimal?id='+id);
  }

  async getAnimaisFavorito(id: any = ''): Promise<any>{
    return  await this.urlService.sendRequestPost('/Animal/GetAnimaisFavorito?id='+id);
  }

  async postAnimal(request: any){
    return await this.urlService.sendRequestPost('/Animal/PostAnimal', JSON.stringify(request));
  }

  async deleteAnimal(id: any = ''){
    return await this.urlService.sendRequestPost('/Animal/DeleteAnimal?id='+id);
  }

  async updateAnimal(request: any){
    return await this.urlService.sendRequestPost('/Animal/UpdateAnimal', JSON.stringify(request));
  }

  async getUsuario(id: any){
    return await this.urlService.sendRequestPost('/Usuario/GetUsuario?id='+id);
  }

  async updateCredenciais(request: any){
    return await this.urlService.sendRequestPost('/Usuario/UpdateCredenciais', JSON.stringify(request));
  }
}
