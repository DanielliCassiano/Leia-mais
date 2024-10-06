import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.scss',
  imports: [NgbCarouselModule, NgbNavModule, RouterModule],
})
export class VitrineComponent {
  active = 1;
}
