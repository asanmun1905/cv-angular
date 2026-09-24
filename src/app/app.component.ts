import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';
  nombre = 'Adrián Sánchez Muñoz'
  fecha = new Date();
  grado = 'Desarrollo de Aplicaciones Multiplataforma';
  titulo = 'Mi CV en Angular';
  ciudad = 'Málaga';
  telefono = '+34 697 292 503';
  email = 'adri1952005.4@gmail.com';
  github = 'https://github.com/asanmun1905';
  idiomas = 'Español, Inglés';
}
