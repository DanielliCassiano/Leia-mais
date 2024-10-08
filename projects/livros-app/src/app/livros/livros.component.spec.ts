import '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { LivrosComponent } from './livros.component';

describe('LivrosComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivrosComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LivrosComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
