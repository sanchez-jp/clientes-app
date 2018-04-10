import {Component, OnInit} from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import swal from 'sweetalert2';

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

  /**
   * Elimina un cliente de la lista de clientes
   * @param {Cliente} cliente el cliente a eliminar
   */
  delete(cliente: Cliente): void {
    swal({
      title: 'Está seguro',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Se elimina el cliente de la base de datos
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            // Se actualiza la tabla con filter()
            this.clientes = this.clientes.filter(cli => cli !== cliente);
            swal(
              'Cliente Eliminado!',
              `Cliente ${cliente.nombre} ${cliente.apellido} eliminado con éxito`,
              'success'
            );
          }
        );
      }
    });
  }

}
