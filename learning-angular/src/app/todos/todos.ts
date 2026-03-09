import { Component, inject, signal } from '@angular/core';
import { TodoService, Obj } from './todo';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  private todosService = inject(TodoService);

  loading = signal(true);
  error = signal(false);

  todos = toSignal(
    this.todosService.getTodos().pipe(
      tap(() => this.loading.set(false)),
      catchError(() => {
        this.error.set(true);
        this.loading.set(false);
        return of([]);
      }),
    ),
    { initialValue: [] },
  );

  todoComments = signal<Obj[]>([]);
  loadComments(postId: number) {
    this.todosService.getComments(postId).subscribe((comments) => {
      this.todoComments.set(comments);
    });
  }

  constructor() {
    this.todosService.getPosts().subscribe((response) => {
      console.log('Response from POST request:', response);
    });
  }
}
