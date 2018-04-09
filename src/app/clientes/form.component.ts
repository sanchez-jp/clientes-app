import {Component, OnInit} from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  cliente: Cliente = new Cliente();
  titulo = 'Crear cliente';

  constructor(private clienteService: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.cargarCliente();
  }

  /**
   * Realiza la carga de datos de un cliente
   */
  cargarCliente(): void {
    this.activatedRoute.params.subscribe(
      params => {
        const id = params['id'];
        if (id) {
          this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
        }
      }
    );
  }

  /**
   * Crea un nuevo cliente a partir de los datos del formulario
   */
  public create(): void {
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes']);
        swal('Nuevo cliente', `Cliente ${cliente.nombre} creado con éxito`, 'success');
      }
    );
  }

}
