import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Mi CV en Angular');
  });

  it('should change the main section when a header button is clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const experienceButton = fixture.nativeElement.querySelector(
      'app-header button:nth-of-type(2)'
    ) as HTMLButtonElement;
    experienceButton.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('app-main h2')?.textContent).toContain(
      'Experiencia profesional'
    );
    expect(fixture.componentInstance.seccionActiva).toBe('experiencia');
  });

  it('should show and hide personal contact details', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const toggle = fixture.nativeElement.querySelector(
      '.contact-toggle'
    ) as HTMLButtonElement;
    toggle.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('adri1952005.4@gmail.com');

    toggle.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).not.toContain('adri1952005.4@gmail.com');
  });

  it('should show the empty-state message when there is no experience', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.experiencias = [];
    fixture.componentInstance.seccionActiva = 'experiencia';
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(
      'Todavía no se ha añadido experiencia profesional'
    );
  });
});
