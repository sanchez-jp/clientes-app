import {Component, OnInit} from '@angular/core';
import {Cliente} from './cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  cliente: Cliente = new Cliente();
  titulo = 'Crear cliente';

  constructor() {
  }

  ngOnInit() {
  }

  public create(): void {
    console.log('Clicked!');
    console.log(this.cliente);
  }

}
