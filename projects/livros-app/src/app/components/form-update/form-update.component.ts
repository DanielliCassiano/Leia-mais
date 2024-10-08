import { Component, OnInit,  inject, Input, AbstractType } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators} from '@angular/forms';
import { LivrosService } from '..//../services/livros.service';
import { CatalogoComponent } from '../../catalogo/catalogo.component';

@Component({
	selector: 'form-modal',
	templateUrl: './form-update.componant.html',
	standalone: true,
	styleUrl: './form-update.componant.scss',
	imports: [
		CommonModule,
		CatalogoComponent,
		ReactiveFormsModule
	]
})

export class FormUpdateComponent {

	@Input() livrosForm :boolean; 
	@Input() newBookForm :any;
	@Input() activatedModal :any;
	@Input() onSubmit :any;
	@Input() livro :any;
	@Input() geners :any;
	@Input() publishers :any;

	constructor(
		private service: LivrosService,
	) {}

	ngOnInit() {
		
		console.log(this.livrosForm);
		console.log(this.newBookForm.value);
		console.log(this.onSubmit);
		console.log(this.geners);
		console.log(this.activatedModal);

		this.newBookForm.patchValue({
			description:  new FormControl('', Validators.required),
			price:  new FormControl('', Validators.required),
		});

  }

	updateBookFields() {
    console.log(this.newBookForm.value);
		if(this.livro.id) {
			console.log('error');
			this.service.updateLivro(this.newBookForm.value, this.livro.id).subscribe({
				next: value => console.log('Sucesso', value),
				error: err => console.log(err),
				complete: () => console.log('Completo!!')
			});
  	}
	}

}