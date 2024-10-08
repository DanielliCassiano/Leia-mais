import '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { CatalogoComponent } from './catalogo.component';

describe('CatalogoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CatalogoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
