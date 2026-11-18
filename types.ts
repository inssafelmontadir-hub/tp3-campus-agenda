export type StatutType = 'Complet' | 'Presque complet' | 'Ouvert';

export interface Evenement {
  id: string;
  titre: string;
  categorie: 'Atelier' | 'Conférence' | 'Rencontre';
  capacite: number;
  inscrits: number;
}