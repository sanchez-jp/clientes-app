import {Component} from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCurso: string[] = ['TypeScript', 'javaScript', 'Java SE', 'C#', 'PHP'];
  habilitar = true;

  /**
   * Constructor por defecto del componente
   */
  constructor() {
  }

  /**
   * Establece la variable habilitar con el valor contrario al que posee en ese momento
   */
  setHabilitar(): void {
    this.habilitar = (!this.habilitar);
  }

}
