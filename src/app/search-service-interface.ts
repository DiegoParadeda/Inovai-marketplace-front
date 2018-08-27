import {Observable} from 'rxjs/Observable';

export interface SearchServiceInterface {
    list(max: number, offset: number, sort?: any, search?: any): Observable<any>;
}
