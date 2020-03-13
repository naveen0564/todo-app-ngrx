import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodosService } from './todos/services/todos.service';
import { Observable } from 'rxjs';
import { ITodo } from './todos/interfaces';
import { FILTER_MODES } from './todos/constants/filter-modes';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  todoForm: FormGroup;
  todoItems$: Observable<ITodo[]>;
  remainingTodoCount$: Observable<number>;
  todoCount$: Observable<number>;
  filtertext: FILTER_MODES ;

  constructor(private todosService: TodosService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(){
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required]
    });
    this.todoItems$ = this.todosService.allTodos$;
    this.remainingTodoCount$ = this.todosService.getTodoRemainingCount();
    this.todoCount$ = this.todosService.getTodosLength();
  }

  addTodo(): void {
    if (this.todoForm.get('todo').valid) {
      const todoItem: ITodo = {
        text: this.todoForm.get('todo').value,
        completed: false,
        editing: false
      };
      this.todosService.addTodo(todoItem);
      this.todoForm.reset();
    }
  }

  filterTodo(filtertext: FILTER_MODES) {
    this.filtertext = filtertext;
    this.todoItems$ = this.todosService.getFilteredTodos(filtertext);
  }

  clearComplete(): void{
   this.todosService.clearCompleted();
  }
}
