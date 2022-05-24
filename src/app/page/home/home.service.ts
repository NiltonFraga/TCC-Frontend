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
}
