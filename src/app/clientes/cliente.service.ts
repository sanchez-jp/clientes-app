import {Injectable} from '@angular/core';
import {CLIENTES} from './clientes.json';
import {Cliente} from './cliente';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ClienteService {

  private urlEndPoint = 'http://localhost:8080/api/clientes';

  /**
   * Conjunto inmutable de encabezados Http, con análisis perezoso.
   */
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  /**
   * Obtiene el flujo de datos del listado de clientes
   * @returns {Observable<Cliente[]>} el flujo de datos del listado de clientes
   */
  getClientes(): Observable<Cliente[]> {
    // return of(CLIENTES);

    return this.http.get<Cliente[]>(this.urlEndPoint);

    // Otra forma de hacerlo:
    /*return this.http.get(this.urlEndPoint).pipe(
      map( response => response as Cliente[] )
    );*/
  }

  /**
   * Inserta un nuevo cliente en la base de datos
   * @param {Cliente} cliente objeto con los datos del cliente a crear
   * @returns {Observable<Cliente>} obserbable del cliente creado
   */
  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }

  /**
   * Muestra los datos de un cliente determinado
   * @param {number} id el identificador del cliente a mostrar
   * @returns {Observable<Cliente>}
   */
  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  /**
   * Actualiza los datos de un cliente
   * @param {Cliente} cliente objeto cliente con los datos actualizados
   * @returns {Observable<Cliente>} Observable del cliente actualizado
   */
  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders});
  }

}
