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

	ngOnInit() {
	}
}