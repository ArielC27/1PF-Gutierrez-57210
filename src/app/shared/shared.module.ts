import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [NavbarComponent, ToolbarComponent, ListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
  ],
  exports: [NavbarComponent, ToolbarComponent, ListComponent],
})
export class SharedModule {}
