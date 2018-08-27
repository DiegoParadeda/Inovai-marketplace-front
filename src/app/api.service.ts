import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as URI from 'urijs'
import {environment} from '../environments/environment';
import * as normalizeUrl from 'normalize-url';

export abstract class ApiService {

    protected apiEndPoint = environment.apiUrl;
    protected resource: string;

    constructor(private http: HttpClient, resource: string) {
        this.resource = resource;
    }

    protected getResourceUrl(r?: string, id?: any): URI {
        let resource: string;
        if (typeof r !== 'undefined') {
            resource = r;
        } else {
            resource = this.resource;
        }
        if (id !== undefined) {
            return new URI(this.apiEndPoint).path(resource).segment(id.toString());
        }
        return new URI(this.apiEndPoint).path(resource);
    }

    protected appendParamsToUrl(url: URI, params: any) {
        if (params.params !== undefined) {
            url.search(params.params)
        }
        return url;
    }

    protected configureHeaders(): HttpHeaders {
        return new HttpHeaders({'Content-Type': 'application/json', 'Accept-Language': 'pt-BR'});
    }

    /**
     *  Essa função recebe um objeto do tipo:
     *  <pre>
     *      {
     *          id: '1',
     *          resource: '/admin/produto',
     *          params: {username: 'claudio'}
     *      }
     *  </pre>
     *  Esse parametro é opcional, assim como todos os itens dentro do objeto
     *
     *  @see appendParamsToUrl
     *  @see getResourceUrl
     */
    protected get(params?: any) {
        const headers = this.configureHeaders();
        const url = this.appendParamsToUrl(
            this.getResourceUrl(params ? params.resource : undefined, params ? params.id : undefined),
            params ? params : {});
        console.log(normalizeUrl(url.toString()));
        return this.http.get(normalizeUrl(url.toString()), {headers})
    }

    /**
     *  Essa função recebe um objeto do tipo:
     *  <pre>
     *      {
     *          id: '1',
     *          resource: '/admin/produto',
     *          params: {username: 'claudio'}
     *      }
     *  </pre>
     *  Esse parametro é opcional, assim como todos os itens dentro do objeto
     *
     *  @see appendParamsToUrl
     *  @see getResourceUrl
     */
    protected post(params?: any) {
        const headers = this.configureHeaders();
        let url = this.appendParamsToUrl(
            this.getResourceUrl(params ? params.resource : undefined),
            {});
        return this.http.post(url.toString(), params ? params.params : {}, {headers});
    }

    /**
     *  Essa função recebe um objeto do tipo:
     *  <pre>
     *      {
     *          id: '1',
     *          resource: '/admin/produto',
     *          params: {username: 'claudio'}
     *      }
     *  </pre>
     *  Esse parametro é opcional, assim como todos os itens dentro do objeto
     *
     *  @see appendParamsToUrl
     *  @see getResourceUrl
     */
    protected put(params?: any) {
        const headers = this.configureHeaders();
        let url = this.appendParamsToUrl(
            this.getResourceUrl(params ? params.resource : undefined, params ? params.params.id : undefined),
            {});
        return this.http.put(url.toString(), params ? params.params : {}, {headers});
    }

    protected delete(params?: any) {
        const headers = this.configureHeaders();
        let url = this.appendParamsToUrl(
            this.getResourceUrl(params ? params.resource : undefined, params ? params.id : undefined),
            params ? params : {});
        return this.http.delete(url.toString(), {headers})
    }
}