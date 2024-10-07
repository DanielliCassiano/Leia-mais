import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss',
  imports: [
    NgbCarouselModule, 
    NgbNavModule, 
    RouterModule,
    NgbDropdownModule
  ],
})
export class LivrosComponent {
  active = 1;
}
