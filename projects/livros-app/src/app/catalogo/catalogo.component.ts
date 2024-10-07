import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss',
  imports: [
    NgbCarouselModule, 
    NgbNavModule, 
    RouterModule,
    NgbDropdownModule
  ],
})
export class CatalogoComponent {
  active = 1;
}
