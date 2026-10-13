import { DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { CvSection } from '../cv.models';

@Component({
  selector: 'app-header',
  imports: [DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  titulo = input.required<string>();
  nombre = input.required<string>();
  grado = input.required<string>();
  fecha = input.required<Date>();
  seccionActiva = input.required<CvSection>();

  seccionSeleccionada = output<CvSection>();

  seleccionarSeccion(seccion: CvSection): void {
    this.seccionSeleccionada.emit(seccion);
  }
}
