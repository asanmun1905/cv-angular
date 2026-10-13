import { Component, input } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  ciudad = input.required<string>();
  telefono = input.required<string>();
  email = input.required<string>();
  github = input.required<string>();
  idiomas = input.required<string>();
  tecnologias = input.required<string[]>();

  mostrarContacto = false;
  tecnologiaSeleccionada = '';

  alternarContacto(): void {
    this.mostrarContacto = !this.mostrarContacto;
  }

  seleccionarTecnologia(tecnologia: string): void {
    this.tecnologiaSeleccionada = tecnologia;
  }
}
