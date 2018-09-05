import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {SearchServiceInterface} from './search-service-interface';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpresaService extends ApiService implements SearchServiceInterface {

    constructor(http: HttpClient) {
        super(http, 'empresa');
    }

    list(max: number, offset: number, sort?: any, order?: any, search?: any) {
        let params: any;
        params = {max: max, offset: offset};
        if (sort) {
            params[`sort`] = sort.fieldName.toLowerCase();
            params[`order`] = order;
        }
        if (search && search.value.length > 0) {
            params[`search`] = search.value;
        }
        return super.get({params: params}).map((item: any) => {
            console.log(item);
            item.data.forEach(data => {
                data.produtos = data.produtos.length;
            });
            return item;
        });
    }

    create(selectedEmpresa: any) {
        return super.post({params: selectedEmpresa});
    }

    delete(selectedEmpresa: any) {
        let id: number;
        id = selectedEmpresa.id;
        return super.delete({id: id});
    }

    edit(selectedEmpresa: any) {
        return super.put({params: selectedEmpresa});
    }
}
