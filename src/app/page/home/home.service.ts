import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private urlService: UrlService) { }

  async getAllAnimal(request: any = ''): Promise<any>{
    return  await this.urlService.sendRequestPost('/Animal/GetAllAnimais');
  }

  async getAnimalById(id: any = ''): Promise<any>{
    return  await this.urlService.sendRequestPost('/Animal/GetAnimal?id='+id);
  }

  async favoritarAnimal(request: any): Promise<any>{
    return  await this.urlService.sendRequestPost('/AnimalFavorito/UpdateAnimalFavorito', JSON.stringify(request));
  }

  async postChat(request: any): Promise<any>{
    return  await this.urlService.sendRequestPost('/Chat/PostChat', JSON.stringify(request));
  }
}
