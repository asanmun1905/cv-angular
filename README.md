# Cv

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.27.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Conceptos del CV

- **Interpolación:** `{{ }}` muestra en la plantilla el valor de una propiedad del componente. Por ejemplo, `{{ this.nombre }}` muestra el nombre definido en `app.component.ts`.
- **NgOptimizedImage:** `ngSrc` indica la ruta de la imagen y la directiva ayuda a optimizar su carga. `width` y `height` permiten reservar el espacio de la imagen. El CV usa `foto-placeholder.svg` como imagen provisional.
- **Bucle `@for`:** recorre arrays y crea un elemento por cada valor. Por ejemplo, `@for (tecnologia of this.tecnologias; track tecnologia)` representa cada tecnología.
- **DatePipe:** se importa `DatePipe` y se aplica con `{{this.fecha | date: 'dd/MM/yyyy'}}` para dar formato día/mes/año a la fecha.

Los datos nuevos del contenido profesional se encuentran en las propiedades de `app.component.ts`; la estructura está en `app.component.html` y su distribución usa Flexbox en `app.component.css`.
