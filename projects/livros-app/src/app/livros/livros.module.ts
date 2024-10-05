import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosComponent } from './livros.component'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LivrosComponent
  ],
  imports: [
   CommonModule,
   BrowserModule,
   RouterModule.forChild([
    {
      path: '',
      component: LivrosComponent
    }
   ])
  ]
})
export class LivrosModule {}