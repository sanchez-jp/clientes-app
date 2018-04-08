import {Injectable} from '@angular/core';
import {CLIENTES} from './clientes.json';
import {Cliente} from './cliente';

@Injectable()
export class ClienteService {

  constructor() {
  }

  /**
   * Obtiene el listado de clientes
   * @returns {Cliente[]} el listado de clientes
   */
  static getClientes(): Cliente[] {
    return CLIENTES;
  }

}
