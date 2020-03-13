import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ITodo } from '@app/todos/interfaces';
import { TodosService } from '@app/todos/services/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-list',
  styleUrls: ['./todo-list.component.scss'],
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {

  @Input() todoItems$: Observable<ITodo[]>;

  constructor(private todosService: TodosService) {}

  removeTodo(id: number): void {
     this.todosService.removeTodo(id);
  }

  editTodo(id: number): void {
    this.todosService.editTodo(id, true);
  }

  updateTodo(id: number, text: string): void {
    this.todosService.updateTodo(id, text);
  }

  todoToggle(id: number, completed: boolean): void {
   this.todosService.toggleComplete(id, !completed);
  }

  cancelEditingTodo(id: number): void {
   this.todosService.editTodo(id, false);
  }
}
