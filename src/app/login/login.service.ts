import { Injectable } from '@angular/core';
import { UrlService } from '../shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private urlService: UrlService) { }

  async entrar(email: string, senha: string){
    return await this.urlService.sendRequestPost('/Login/Login?usuario='+email+'&senha='+senha);
  }

}
