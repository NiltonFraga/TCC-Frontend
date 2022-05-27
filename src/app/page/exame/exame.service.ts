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

  async postServico(request: any){
    return await this.urlService.sendRequestPost('/Servico/PostServico', JSON.stringify(request));
  }

  async getServicoById(id: string){
    return await this.urlService.sendRequestPost('/Servico/GetServicoById?id='+id);
  }

  async updateServico(request: any){
    return await this.urlService.sendRequestPost('/Servico/UpdateServico', JSON.stringify(request));
  }

  async getProdutosByServico(id: string){
    return await this.urlService.sendRequestPost('/Produto/GetProdutosByServico?id='+id);
  }

  async getProdutoById(id: string){
    return await this.urlService.sendRequestPost('/Produto/GetProdutoById?id='+id);
  }

  async postProduto(request: any){
    return await this.urlService.sendRequestPost('/Produto/PostProduto', JSON.stringify(request));
  }

  async updateProduto(request: any){
    return await this.urlService.sendRequestPost('/Produto/UpdateProduto', JSON.stringify(request));
  }

  async consultarListaTiposExames(){
    return await this.urlService.sendRequestPost('/Exame/ConsultarListaTiposExame');
  }

  async salvarExame(request: any){
    return await this.urlService.sendRequestPost('/Exame/CadastroExame', JSON.stringify(request));
  }

}
