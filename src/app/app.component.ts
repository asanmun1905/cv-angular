import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CvSection, Experience } from './cv.models';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainLayoutComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  nombre = 'Adrián Sánchez Muñoz';
  fecha = new Date();
  grado = 'Desarrollo de Aplicaciones Multiplataforma';
  titulo = 'Mi CV en Angular';

  seccionActiva: CvSection = 'resumen';

  ciudad = 'Málaga';
  telefono = '+34 697 292 503';
  email = 'adri1952005.4@gmail.com';
  github = 'https://github.com/asanmun1905';
  idiomas = 'Español nativo, Inglés alto';

  sobreMi = 'Estudiante de Desarrollo de Aplicaciones Multiplataforma con formación previa en 42 Málaga. Interesado en el desarrollo de software y en seguir creciendo profesionalmente, especialmente en desarrollo backend y frontend. Tengo experiencia trabajando con Java, bases de datos, desarrollo web, Git, Docker y AWS, y me interesa aprender nuevas tecnologías y aplicarlas en proyectos reales.';

  experiencias: Experience[] = [
    {
      id: 1,
      empresa: 'Diverxia Consulting',
      puesto: 'Prácticas',
      periodo: '2025',
      descripcion: 'Experiencia en un entorno profesional de desarrollo y tecnología. Participación como staff en la Flash Session, un hackathon de dos días, colaborando con el equipo y adaptándome a un entorno de trabajo dinámico.'
    },
    {
      id: 2,
      empresa: 'Amazon',
      puesto: 'Repartidor',
      periodo: 'Verano',
      descripcion: 'Experiencia profesional desarrollando autonomía, organización y capacidad de adaptación en un entorno de trabajo dinámico.'
    }
  ];

  formacion = 'Desarrollo de Aplicaciones Multiplataforma (DAM) - CPIFP Alan Turing. Formación previa en programación en 42 Málaga. Bachillerato científico.';

  tecnologias = [
    'Java',
    'SQL',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Node.js',
    'Docker',
    'Docker Compose',
    'AWS',
    'Git',
    'Maven',
    'JUnit'
  ];

  cambiarSeccion(seccion: CvSection): void {
    this.seccionActiva = seccion;
  }
}
