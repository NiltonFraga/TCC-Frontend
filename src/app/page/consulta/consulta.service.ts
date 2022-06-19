import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private urlService: UrlService) { }

  async getChatById(id: number){
    return await this.urlService.sendRequestPost('/Chat/GetChatById?id='+id);
  }

  async deleteChat(id: number){
    return await this.urlService.sendRequestPost('/Chat/DeleteChat?id='+id);
  }

  async getAllConversas(request: any){
    return await this.urlService.sendRequestPost('/Conversa/GetAllConversas', JSON.stringify(request));
  }

  async getByDestino(request: any){
    return await this.urlService.sendRequestPost('/Conversa/GetByDestino', JSON.stringify(request));
  }

  async postConversa(request: any){
    return await this.urlService.sendRequestPost('/Conversa/PostConversa', JSON.stringify(request));
  }
}
