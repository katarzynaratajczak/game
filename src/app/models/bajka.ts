// tslint:disable-next-line: no-empty-interface
export interface Bajka {
  id: number;
  tytuł: string;
  tytułowyBohater: string;
  bohater: string;
  zainteresowanie: string;
}

export class Bajka {
  id: number;
  tytuł: string;
  tytułowyBohater: string;
  bohater: string;
  zainteresowanie: string;

  constructor(bajka: Partial<Bajka> = {}) {
    this.id = bajka.id;
    this.tytuł = bajka.tytuł;
    this.tytułowyBohater = bajka.tytułowyBohater;
    this.bohater = bajka.bohater;
    this.zainteresowanie = bajka.zainteresowanie;

  }
}
