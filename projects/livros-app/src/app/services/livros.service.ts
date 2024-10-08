import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Livro } from "../interfaces/livro"
import { delay, tap } from "rxjs";
import { environment } from "../../environments/environment";
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LivrosService {

  private readonly ApiPort = `${environment.ApiPort}books`;

  constructor(private http: HttpClient ) {}

  listLivro() {
    return this.http.get<Livro[]>(this.ApiPort)
    .pipe(
      delay(2000),
      tap(console.log)
    );
  }

  createLivro(livro: any) {
    return this.http.post(this.ApiPort, livro).pipe(take(1));
  }

  updateLivro(livro: any, id: any) {
    return this.http.put(`${this.ApiPort}/${id}`, livro).pipe(take(1));
  }
}