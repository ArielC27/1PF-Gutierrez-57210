import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../core/services/alumno.service';
import { Alumno } from '../../core/models/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnoService.currentAlumnos.subscribe(
      (alumnos) => (this.alumnos = alumnos)
    );
  }
}
