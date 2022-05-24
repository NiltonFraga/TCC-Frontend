import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  constructor(private urlService: UrlService) { }

  async getAllServico(){
    return await this.urlService.sendRequestPost('/Servico/GetAllServico');
  }

  async getServicosByUsuario(id: string){
    return await this.urlService.sendRequestPost('/Servico/GetServicoByUsuario?id='+id);
  }

  async getServicoById(id: string){
    return await this.urlService.sendRequestPost('/Servico/GetServicoById?id='+id);
  }

  async consultarListaTiposExames(){
    return await this.urlService.sendRequestPost('/Exame/ConsultarListaTiposExame');
  }

  async salvarExame(request: any){
    return await this.urlService.sendRequestPost('/Exame/CadastroExame', JSON.stringify(request));
  }

}
