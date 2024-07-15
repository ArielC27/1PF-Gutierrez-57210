import { Component, Input } from '@angular/core';
import { AlumnoService } from '../../core/services/alumno.service';
import { Alumno } from '../../core/models/alumno';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
})
export class ListComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: Alumno[] = [];

  // constructor(private alumnoService: AlumnoService) {}

  // ngOnInit() {
  //   this.alumnoService.updateAlumnos(this.dataSource);
  // }
}
