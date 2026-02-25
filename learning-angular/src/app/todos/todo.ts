import { Injectable } from '@angular/core';
import { inject } from '@angular/core/primitives/di';
import { HttpClient } from '@angular/common/http';
// import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, Observable, of } from 'rxjs';
export interface Obj {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  private http = inject(HttpClient);

  //manera para hacerlo para un proyecto real
  getTodos(): Observable<Obj[]> {
    return this.http.get<Obj[]>(this.apiUrl).pipe(
      catchError((err) => {
        console.error('Error cargando todos', err);
        return of([]);
      }),
    );
  }
  // manera moderna de hacerlo con signal
  // todos = toSignal(this.http.get<Obj[]>('https://jsonplaceholder.typicode.com/todos'), {
  //   initialValue: [],
  // });

  //combinar rxjs con signal
  //rxjs
  // todos$ = this.http.get<Obj[]>('https://jsonplaceholder.typicode.com/todos');
  //signal
  // todos = toSignal(this.todos$, { initialValue: [] });
}
