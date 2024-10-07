import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LivrosService } from '../services/livros.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss',
  imports: [
    NgbCarouselModule, 
    NgbNavModule, 
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    ReactiveFormsModule
  ],
})
export class LivrosComponent implements OnInit {
  active = 1;
  geners = ['Fantasia', 'Mistério', 'Romance', "Ficção"];
  publishers = ['Aleph'];

  constructor(private  fb: FormBuilder, private service: LivrosService) {}

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
    pagesNum: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
  
  
  }

  onSubmit() {
    console.log(this.newBookForm.value);
    if(this.newBookForm.valid) {
      this.service.createLivro(this.newBookForm.value).subscribe({
        next: value => console.log('Sucesso', value),
        error: err => console.log(err),
        complete: () => console.log('Completo!!')
      });
    }
  }
}
