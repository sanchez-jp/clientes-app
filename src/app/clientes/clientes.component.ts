import {Component, OnInit} from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  /**
   * Array de objetos de tipo cliente en formato JSON
   */
  clientes: Cliente[];

  /**
   * Constructor parametrizado de ClientesComponent
   * Se define el atributo y se inyecta el valor a la vez
   * @param {ClienteService} clienteService la capa de servicio de cliente
   */
  constructor(private clienteService: ClienteService) {
  }

  /**
   * Inicializador
   * Inicia/declara los elementos del componente tras la instanciación del mismo.
   * Subscripción del observador a los clientes
   */
  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

}
