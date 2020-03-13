import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosListComponent } from './todo-list.component';
import { StoreModule } from '@ngrx/store';
import { TodosService } from '@app/todos/services/todos.service';
import { ReactiveFormsModule } from '@angular/forms';
import {
  todosReducer,
  ITodosState,
  initialState
} from '@app/todos/state/todos.reducer';
import { DebugElement } from '@angular/core';
import { clone } from '@app/lib/utils';
import { By } from '@angular/platform-browser';
import { CompleteAllComponent } from '../complete-all/complete-all.component';
import { of } from 'rxjs';

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;
  let todosSevice: TodosService;
  let debugElement: DebugElement;
  let state: ITodosState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosListComponent, CompleteAllComponent],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('todos', todosReducer),
        ReactiveFormsModule
      ],
      providers: [TodosService]
    }).compileComponents();
    fixture = TestBed.createComponent(TodosListComponent);
    // tslint:disable-next-line: deprecation
    todosSevice = TestBed.get(TodosService);
    debugElement = fixture.debugElement;
    state = clone(initialState);
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  // it('should have as title todos ', () => {
  //   const compiled = debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('todos');
  // });

  // it('should throw form invalid  ', () => {
  //   const form = component.todoForm;
  //   expect(form.valid).toEqual(false);
  // });

  it('should todo added ', () => {
    const compiled = debugElement.nativeElement;
    component.todoItems$ = of([{
      text: this.todoForm.get('todo').value,
      completed: false,
      editing: false,
      id: 1
    }]);

    fixture.detectChanges();
    expect(compiled.querySelectorAll('ul li').length).toEqual(1);
  });

  // describe('Remove Todo', () => {
  //   it('should remove todo ', () => {
  //     const form = component.todoForm;
  //     form.get('todo').setValue('Todo 1');
  //     let textfield = fixture.debugElement.query(By.css('input[type=text]'));
  //     textfield.triggerEventHandler('keyup.enter', null);
  //     form.get('todo').setValue('Todo 2');
  //     textfield = fixture.debugElement.query(By.css('input[type=text]'));
  //     textfield.triggerEventHandler('keyup.enter', null);
  //     fixture.detectChanges();
  //     component.removeTodo(1);
  //     expect(component.todoListForCount.length).toEqual(1);
  //     fixture.detectChanges();
  //   });
  // });

  // describe('Toggle Todo', () => {
  //   it('should todo complete ', () => {
  //     const form = component.todoForm;
  //     form.get('todo').setValue('Todo 1');
  //     const textfield = fixture.debugElement.query(By.css('input[type=text]'));
  //     textfield.triggerEventHandler('keyup.enter', null);
  //     fixture.detectChanges();
  //     component.todoToggle(1, false);
  //     fixture.detectChanges();
  //     expect(
  //       component.todoListForCount.filter(ele => ele.completed === true).length
  //     ).toEqual(1);
  //     fixture.detectChanges();
  //   });
  // });

  // describe('Update Todo', () => {
  //   it('should todo update ', () => {
  //     const form = component.todoForm;
  //     form.get('todo').setValue('Todo 1');
  //     const textfield = fixture.debugElement.query(By.css('input[type=text]'));
  //     textfield.triggerEventHandler('keyup.enter', null);
  //     component.updateTodo(1, 'Todo Updated');
  //     fixture.detectChanges();
  //     expect(
  //       fixture.debugElement.query(By.css('ul li:first-child')).nativeElement
  //         .innerText
  //     ).toEqual('Todo Updated');
  //     fixture.detectChanges();
  //   });
  // });

  // describe('Clear Todo', () => {
  //   it('should clear all toods ', () => {
  //     const form = component.todoForm;
  //     form.get('todo').setValue('Todo 1');
  //     const textfield = fixture.debugElement.query(By.css('input[type=text]'));
  //     textfield.triggerEventHandler('keyup.enter', null);
  //     component.todoToggle(1, false);
  //     component.clearComplete();
  //     expect(component.todoList.length).toEqual(0);
  //     fixture.detectChanges();
  //   });

  //   it('should clear toods fail ', () => {
  //       const form = component.todoForm;
  //       form.get('todo').setValue('Todo 1');
  //       const textfield = fixture.debugElement.query(By.css('input[type=text]'));
  //       textfield.triggerEventHandler('keyup.enter', null);
  //       component.todoToggle(1, false);
  //       component.clearComplete();
  //       expect(component.todoList.length).toEqual(0);
  //       fixture.detectChanges();
  //     });
  // });

  // describe('Fliter Todo', () => {
  //   it('should fliter completed todos ', () => {
  //     const form = component.todoForm;
  //     form.get('todo').setValue('Todo 1');
  //     let textfield = fixture.debugElement.query(By.css('input[type=text]'));
  //     textfield.triggerEventHandler('keyup.enter', null);
  //     form.get('todo').setValue('Todo 2');
  //     textfield = fixture.debugElement.query(By.css('input[type=text]'));
  //     textfield.triggerEventHandler('keyup.enter', null);
  //     component.todoToggle(2, false);
  //     component.filterTodo('completed');
  //     expect(component.todoList.length).toEqual(1);
  //     fixture.detectChanges();
  //   });

  //   it('should fliter active todos ', () => {
  //       const form = component.todoForm;
  //       form.get('todo').setValue('Todo 1');
  //       let textfield = fixture.debugElement.query(By.css('input[type=text]'));
  //       textfield.triggerEventHandler('keyup.enter', null);
  //       form.get('todo').setValue('Todo 2');
  //       textfield = fixture.debugElement.query(By.css('input[type=text]'));
  //       textfield.triggerEventHandler('keyup.enter', null);
  //       component.todoToggle(2, false);
  //       component.filterTodo('active');
  //       expect(component.todoList.length).toEqual(1);
  //       fixture.detectChanges();
  //     });

  //   it('should fliter all todos ', () => {
  //       const form = component.todoForm;
  //       form.get('todo').setValue('Todo 1');
  //       let textfield = fixture.debugElement.query(By.css('input[type=text]'));
  //       textfield.triggerEventHandler('keyup.enter', null);
  //       form.get('todo').setValue('Todo 2');
  //       textfield = fixture.debugElement.query(By.css('input[type=text]'));
  //       textfield.triggerEventHandler('keyup.enter', null);
  //       component.todoToggle(2, true);
  //       component.todoToggle(1, true);
  //       component.filterTodo('all');
  //       expect(component.todoList.length).toEqual(2);
  //       fixture.detectChanges();
  //     });
  // });

  afterEach(() => {
    fixture.detectChanges();
  });
});
