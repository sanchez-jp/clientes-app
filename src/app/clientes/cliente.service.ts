import {Injectable} from '@angular/core';
import {CLIENTES} from './clientes.json';
import {Cliente} from './cliente';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ClienteService {

  constructor() {
  }

  /**
   * Obtiene el flujo de datos del listado de clientes
   * @returns {Observable<Cliente[]>} el flujo de datos del listado de clientes
   */
  getClientes(): Observable<Cliente[]> {
    return of(CLIENTES);
  }

}
