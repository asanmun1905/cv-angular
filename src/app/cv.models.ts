export type CvSection = 'resumen' | 'experiencia' | 'formacion';

export interface Experience {
  id: number;
  empresa: string;
  puesto: string;
  periodo: string;
  descripcion: string;
}
