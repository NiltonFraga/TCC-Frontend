import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class ClinicasService {

  constructor(private urlService: UrlService) { }

  async getAllPost(filtro: any){
    return await this.urlService.sendRequestPost('/Post/GetAllPost', JSON.stringify(filtro));
  }

  async getPostAndComentarioById(id: number){
    return await this.urlService.sendRequestPost('/Post/GetPostAndComentarioById?id='+id);
  }

  async getPostById(id: number){
    return await this.urlService.sendRequestPost('/Post/GetPostById?id='+id);
  }

  async postPost(request: any){
    return await this.urlService.sendRequestPost('/Post/PostPost', JSON.stringify(request));
  }

  async updatePost(request: any){
    return await this.urlService.sendRequestPost('/Post/UpdatePost', JSON.stringify(request));
  }

  async deletePost(id: number){
    return await this.urlService.sendRequestPost('/Post/DeletePost?id='+id);
  }

  async postComentario(request: any){
    return await this.urlService.sendRequestPost('/Comentario/PostComentario', JSON.stringify(request));
  }

  async deleteComentario(id: number){
    return await this.urlService.sendRequestPost('/Comentario/DeleteComentario?id='+id);
  }

  async updateCurtida(request: any){
    return await this.urlService.sendRequestPost('/Curtida/UpdateCurtida', JSON.stringify(request));
  }
}
