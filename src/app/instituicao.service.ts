import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class InstituicaoService extends ApiService {

  constructor(http: HttpClient) { 
    super(http, "instituicao")
  }

  list(max: number, offset: number, search?: string) {
    let params:any;
    params = {};
    params.params = {max: max, offset: offset};
    if(search) {
      params.params.search = search;
    }
    return super.get(params);
  }

}
