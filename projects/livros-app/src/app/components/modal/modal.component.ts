import { Component, OnInit,  inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-modal-content',
	standalone: true,
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.scss',
})

export class NgbdModalContentComponent {
	activeModal = inject(NgbActiveModal);

	@Input() name: string;
}