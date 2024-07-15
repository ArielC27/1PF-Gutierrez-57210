import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, AlumnosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    SharedModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
