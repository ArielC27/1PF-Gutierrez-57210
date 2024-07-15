import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private alumnosSource = new BehaviorSubject<Alumno[]>([]);
  currentAlumnos = this.alumnosSource.asObservable();

  constructor() {}

  updateAlumnos(alumnos: Alumno[]) {
    this.alumnosSource.next(alumnos);
  }
}
