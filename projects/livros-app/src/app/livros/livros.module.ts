import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosComponent } from './livros.component'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
   CommonModule,
   BrowserModule,
   LivrosComponent,
   NgbNavModule,
   NgbDropdownModule,
   RouterModule.forChild([
    {
      path: '',
      component: LivrosComponent
    }
   ])
  ]
})
export class LivrosModule {}