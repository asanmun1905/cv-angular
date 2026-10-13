import { Component, input } from '@angular/core';
import { CvSection, Experience } from '../cv.models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  seccion = input.required<CvSection>();
  sobreMi = input.required<string>();
  experiencias = input.required<Experience[]>();
  formacion = input.required<string>();
}
