import { Component, input } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { CvSection, Experience } from '../cv.models';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-main-layout',
  imports: [AsideComponent, MainComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  seccion = input.required<CvSection>();
  ciudad = input.required<string>();
  telefono = input.required<string>();
  email = input.required<string>();
  github = input.required<string>();
  idiomas = input.required<string>();
  sobreMi = input.required<string>();
  experiencias = input.required<Experience[]>();
  formacion = input.required<string>();
  tecnologias = input.required<string[]>();
}
