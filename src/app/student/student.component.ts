import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  communication: number = 0 ;
  competence: number = 0;
  implication: number = 0;
  resultat: number = 0;

  coeffResultat = 0.2;
  coeffCompetence = 0.8;
  coeffImplication = 0.4;
  coeffCommunication = 0.7;


  constructor(private studentService: StudentService) { }

  ngOnInit(): void {

  }

  onFormSubmit(): void {
    const communicationInput = document.querySelector('input[name="communication"]') as HTMLInputElement;
    this.communication = Number(communicationInput.value);

    const competenceInput = document.querySelector('input[name="competence"]') as HTMLInputElement;
    this.competence = Number(competenceInput.value);

    const implicationInput = document.querySelector('input[name="implication"]') as HTMLInputElement;
    this.implication = Number(implicationInput.value);

    const resultatInput = document.querySelector('input[name="resultat"]') as HTMLInputElement;
    this.resultat = Number(resultatInput.value);

    console.log('Communication:', this.communication);
    console.log('Compétence:', this.competence);
    console.log('Implication:', this.implication);
    console.log('Résultat/Objectif:', this.resultat);
  }

  goBack(): void {
    window.history.back();
  }

}
