import {Observable} from 'rxjs/Observable';

export interface SearchServiceInterface {
    list(max: number, offset: number, sort?: any, order?: any, search?: any): Observable<any>;
}
