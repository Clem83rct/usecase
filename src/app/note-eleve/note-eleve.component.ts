import { Component } from '@angular/core';





@Component({
  selector: 'app-note-eleve',
  templateUrl: './note-eleve.component.html',
  styleUrls: ['./note-eleve.component.css'],
})
export class NoteEleveComponent {
  note!: number;
  resultat: number | null = null;
  erreur: string | null = null;

  valider() {
    if (this.note >= 0 && this.note <= 20) {
      this.resultat = this.note;
      this.erreur = null;
    } else {
      this.resultat = null;
      this.erreur = 'La note doit être comprise entre 0 et 20 inclus.';
    }
  }


}
