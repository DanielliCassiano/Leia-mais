import { Component, OnInit,  inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbModal, NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { LivrosService } from '../services/livros.service';
import { Livro } from '../interfaces/livro';
import { Observable } from 'rxjs';
import { ModalCatalogo } from '../components/modal/modal.component';

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
    CommonModule,
  ],
})


export class CatalogoComponent implements OnInit {
  active = 1 
  livros: Livro[];
  livros$: Observable<Livro[]>;

  @Input() newBookForm :any;

  constructor(private  service: LivrosService) {}

  ngOnInit() {
      this.livros$ = this.service.listLivro();
  }

  private modalService = inject(NgbModal);


	open(livro: any) {
		const modalRef = this.modalService.open(ModalCatalogo, { size: 'lg' });
		modalRef.componentInstance.name = 'World';
    console.log(livro);
    
    modalRef.componentInstance.livro = livro;
	}

}
