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

  createLivro(curso: any) {
    return this.http.post(this.ApiPort, curso).pipe(take(1));
  }
}