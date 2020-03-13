import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ITodo } from '../interfaces';
import { ITodosState } from '../state/todos.reducer';
import * as TodoActions from '../state/todo.actions';
import * as todoSelectors from '../state/todo.selectors';
import { FILTER_MODES } from '../constants/filter-modes';

@Injectable()
export class TodosService {
  allTodos$: Observable<ITodo[]>;

  constructor(private store: Store<ITodosState>) {
    this.allTodos$ = this.store.select(todoSelectors.allTodos);
  }

  addTodo(todo: ITodo): void {
    this.store.dispatch(TodoActions.addTodo({todo}));
  }

  removeTodo(id: number): void {
    this.store.dispatch(TodoActions.removeTodo({id}));
  }

  toggleComplete(id: number, completed: boolean): void {
    this.store.dispatch(TodoActions.toggleCompleted({id, completed}));
  }

  toggleAllCompleted(toggle: boolean): void {
    this.store.dispatch(TodoActions.toggleAllCompleted({toggle}));
  }

  updateTodo(id: number, text: string): void {
    this.store.dispatch(TodoActions.updateTodo({id, text}));
  }

  editTodo(id: number, editing: boolean): void {
    this.store.dispatch(TodoActions.editTodo({id, editing}));
  }

  clearCompleted(): void {
    this.store.dispatch(TodoActions.clearCompleted({}));
  }

  getTodoRemainingCount(): Observable<number> {
    return this.store.select(todoSelectors.todosRemainingCount);
  }

  getFilteredTodos(filter: FILTER_MODES): Observable<ITodo[]> {
    return this.store.pipe(select(todoSelectors.todosFilter, { filterText: filter}));
  }

  getTodosLength(): Observable<number> {
    return this.store.select(todoSelectors.todosLength);
  }
}
