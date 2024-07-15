import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { MatIcon } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    SharedModule,
    MatIcon,
    MatNavList,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeModule {}
