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

  async postPost(request: any){
    return await this.urlService.sendRequestPost('/Post/PostPost', JSON.stringify(request));
  }

  async updatePost(request: any){
    return await this.urlService.sendRequestPost('/Post/UpdatePost', JSON.stringify(request));
  }

  async deletePost(id: number){
    return await this.urlService.sendRequestPost('/Post/DeletePost?id='+id);
  }
}
