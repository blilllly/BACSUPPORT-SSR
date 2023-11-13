export interface Printer {
  id: number;
  marca: string;
  modelo: string;
  descrip_corta: string;
  descripcion: string;
  alt_img?: string;
  v_impresion: string;
  dimensiones: string;
  peso: string;
  calidad: string;
  conectividad: string;
  formatos: string;
  modo: string;
}

export interface Testimony {
  score: number;
  title: string;
  prg: string;
  img: string;
  name: string;
  job: string;
}

export interface Numero {
  numero: string;
  mostrar: string;
}
