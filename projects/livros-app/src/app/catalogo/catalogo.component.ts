import { Component, OnInit,  inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbModal, NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { LivrosService } from '../services/livros.service';
import { Livro } from '../interfaces/livro';
import { Observable } from 'rxjs';
import { NgbdModalContentComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss',
  imports: [
    NgbCarouselModule, 
    NgbNavModule, 
    RouterModule,
    NgbDropdownModule,
    CommonModule
  ],
})


export class CatalogoComponent {
  active = 1 
  livros: Livro[];
  livros$: Observable<Livro[]>;

  constructor(private  service: LivrosService) {}

  ngOnInit() {
      this.livros$ = this.service.listLivro();
  }

  private modalService = inject(NgbModal);

	open() {
		const modalRef = this.modalService.open(NgbdModalContentComponent, { size: 'lg' });
		modalRef.componentInstance.name = 'World';
	}
}
