import { Component } from '@angular/core';
import { AlumnoService } from '../../core/services/alumno.service';
import { Alumno } from '../../core/models/alumno';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
})
export class ListComponent {
  displayedColumns: string[] = [
    'Nombre',
    'Apellido',
    'Edad',
    'Domicilio',
    'Telefono',
    'Email',
  ];
  dataSource: Alumno[] = [
    {
      Nombre: 'Juan',
      Apellido: 'Pérez',
      Edad: '20',
      Domicilio: 'Calle Falsa 123',
      Telefono: '123456789',
      Email: 'juan@example.com',
    },
    {
      Nombre: 'María',
      Apellido: 'González',
      Edad: '22',
      Domicilio: 'Avenida Siempre Viva 456',
      Telefono: '987654321',
      Email: 'maria@example.com',
    },
    // otros alumnos
  ];

  // constructor(private alumnoService: AlumnoService) {}

  // ngOnInit() {
  //   this.alumnoService.updateAlumnos(this.dataSource);
  // }
}
