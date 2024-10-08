import { Component,  inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { LivrosService } from '../../services/livros.service';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { CatalogoComponent } from '../../catalogo/catalogo.component';
import { ActivatedRoute } from '@angular/router';
import { FormUpdateComponent } from '../form-update/form-update.component';

@Component({
	selector: 'modal-catalogo',
	standalone: true,
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.scss',
	imports: [
		CommonModule,
		CatalogoComponent,
		ReactiveFormsModule,
		FormUpdateComponent]
})

export class ModalCatalogo {
	activeModal = inject(NgbActiveModal);
	activatedModal = true;
	constructor(
		private  fb: FormBuilder, 
		private service: LivrosService,
		private route: ActivatedRoute
	) {}

	@Input() name: string;
	@Input() livro :any;
	// @Input({required: true}) title!: string;
	// @Input({required: true}) subTitle!: string;
	// @Input({required: true}) authorName!: string;
	// @Input({required: true}) description!: string;
	// @Input({required: true}) publisher!: string;
	// @Input({required: true}) releaseDate!: string;
	// @Input({required: true}) available!: string;
	// @Input({required: true}) geners!: string;
	// @Input({required: true}) language!: string;
	// @Input({required: true}) price!: string;
	// @Input({required: true}) pagesNum!: string;
	// @Input({required: true}) id!: number;

	newBookForm = new FormGroup({
		description: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    subTitle: new FormControl('', [Validators.required]),
    authorName: new FormControl('', [Validators.required]),
    publisher: new FormControl('', [Validators.required]),
    releaseDate: new FormControl('', [Validators.required]),
    available: new FormControl('yes'),
    geners: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    pagesNum: new FormControl('', [Validators.required])
  });


	ngOnInit() {

		// this.route.params.subscribe((params: any) => {
		// 	const id = params['id'];
		// 	const livro$ = this.service.loadByID(id);
		// 	livro$.subscribe((livro) => {
		// 		this.updateBookFields(livro);
		// 	})
		// })

		// this.newBookForm.patchValue({
    //   description: this.newBookForm.value.description,
    //   price: this.newBookForm.value.description,
    // });
  	// editBook(id: any) {
		// 	const livro$ = this.service.loadByID(id);
		// 	livro$.subscribe((livro) => {
		// 		this.updateBookFields(livro);
		// 	})
		// }
  }

	// updateBookFields() {
  //   console.log(this.newBookForm.value);
  //   if(this.newBookForm.valid) {
	// 		if(this.id) {
	// 			console.log('error');
	// 			this.service.updateLivro(this.newBookForm.value, this.id).subscribe({
	// 				next: value => console.log('Sucesso', value),
	// 				error: err => console.log(err),
	// 				complete: () => console.log('Completo!!')
	// 			});
	// 		}
  //   }
  // }
	
	// livros: Livro[];
  // livros$: Observable<Livro[]>;

  // constructor(private  service: LivrosService) {}

  // ngOnInit() {
  //     this.livros$ = this.service.listLivro();
  // }
}