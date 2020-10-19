import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Usuario } from './../model/usuario';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:4200/api/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioApiService {

  constructor(private http: HttpClient) { }

  getUsuarios (): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(apiUrl)
      .pipe(
        tap(clientes => console.log('leu os usuarios')),
        catchError(this.handleError('getUsuario', []))
      );
  }

  
  getUsuario(id: number): Observable<Usuario> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Usuario>(url).pipe(
      tap(_ => console.log(`leu o usuario id=${id}`)),
      catchError(this.handleError<Usuario>(`getUsuario id=${id}`))
    );
  }

  addUsuario (usuario): Observable<Usuario> {
    
    return this.http.post<Usuario>(apiUrl, usuario, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variabl
      tap((usuario: Usuario) => console.log(`adicionou o usuario com w/ id=${usuario.id}`)),
      //tap(_ => console.log(`adicionou o cliente`)),
      catchError(this.handleError<Usuario>('addUsuario'))
    );
  }

  updateUsuario(id, usuario): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, usuario, httpOptions).pipe(
      tap(_ => console.log(`atualiza o usuario com id=${id}`)),
      catchError(this.handleError<any>('updateUsuario'))
    );
  }

  deleteUsuario (id): Observable<Usuario> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Usuario>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuario com id=${id}`)),
      catchError(this.handleError<Usuario>('deleteUsuario'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}