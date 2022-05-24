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

  async salvarMedicamento(request: any){
    return await this.urlService.sendRequestPost('/Medicamento/Cadastro', JSON.stringify(request));
  }

  async editarMedicamento(request: any){
    return await this.urlService.sendRequestPost('/Medicamento/EditarMedicamento', JSON.stringify(request));
  }

  async getMedicamentoById(id: string){
    return await this.urlService.sendRequestPost('/Medicamento/ConsultarMedicamentoById?idMedicamento='+id);
  }
}
