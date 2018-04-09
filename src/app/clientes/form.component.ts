import {Component, OnInit} from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  cliente: Cliente = new Cliente();
  titulo = 'Crear cliente';

  constructor(private clienteService: ClienteService, private router: Router) {
  }

  ngOnInit() {
  }

  /**
   * Crea un nuevo cliente a partir de los datos del formulario
   */
  public create(): void {
    this.clienteService.create(this.cliente).subscribe(
      response => this.router.navigate(['/clientes'])
    );
  }

}
