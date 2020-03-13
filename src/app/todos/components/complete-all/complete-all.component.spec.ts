import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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

describe('CompleteAllComponent', () => {
  let component: CompleteAllComponent;
  let fixture: ComponentFixture<CompleteAllComponent>;
  let todosSevice: TodosService;
  let debugElement: DebugElement;
  let state: ITodosState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteAllComponent],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('todos', todosReducer),
        ReactiveFormsModule
      ],
      providers: [TodosService]
    }).compileComponents();
    fixture = TestBed.createComponent(CompleteAllComponent);
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

});
