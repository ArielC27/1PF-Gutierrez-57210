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

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnoService.currentAlumnos.subscribe(
      (alumnos) => (this.alumnos = alumnos)
    );
  }
}
