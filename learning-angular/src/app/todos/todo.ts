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

  private readonly commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

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

  getComments(postId: number): Observable<Obj[]> {
    return this.http.get<Obj[]>(`${this.commentsUrl}?postId=${postId}`).pipe(
      catchError((err) => {
        console.error('Error cargando comments', err);
        return of([]);
      }),
    );
  }

  getPosts() {
    const body = {
      id: 1,
      comment: 'hola',
      date: '2024-06-01',
    };
    return this.http.post('https://jsonplaceholder.typicode.com/posts', body);
  }
  // manera moderna de hacerlo con signal
  // todos = toSignal(this.http.get<Obj[]>('https://jsonplaceholder.typicode.com/todos'), {
  //   initialValue: [],
  // });

  //rxjs
  // todos$ = this.http.get<Obj[]>('https://jsonplaceholder.typicode.com/todos');
  //signal
  // todos = toSignal(this.todos$, { initialValue: [] });
}
