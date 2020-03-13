import * as TodoActions from './todo.actions';
import { ITodo } from '../interfaces/ITodo';
import { createReducer, Action, on } from '@ngrx/store';

export interface ITodosState {
  todos?: ITodo[];
}

export const initialState: ITodosState = {
  todos: []
};

export const todosReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, { todo }) => ({
    ...state,
    todos: [{ ...todo, id: state.todos.length + 1 }, ...state.todos]
  })),
  on(TodoActions.removeTodo, (state, { id }) => ({
    ...state,
    todos: [...state.todos.filter(todoItem => todoItem.id !== id)]
  })),
  on(TodoActions.toggleCompleted, (state, { id, completed }) => {
    const todos = state.todos.map(todo => {
      if (todo.id === id) {
        const todoItem = {
          text: todo.text,
          completed,
          id,
          editing: todo.editing
        };
        return todoItem;
      } else {
        return todo;
      }
    });
    return { ...state, todos };
  }),
  on(TodoActions.clearCompleted, (state, {}) => ({
    ...state,
    todos: [...state.todos.filter(todoItem => todoItem.completed !== true)]
  })),
  on(TodoActions.editTodo, (state, {id, editing}) => {
    const todos = state.todos.map(todo => {
    if (todo.id === id) {
      const todoItem = {
       ...todo,
        editing
      };
      return todoItem;
    } else {
      return todo;
    }
  });
    return {...state, todos};
  }),
  on(TodoActions.updateTodo, (state, { id, text } ) => {
    const todos = state.todos.map(todo => {
      if (todo.id === id) {
        const todoItem = {
         ...todo,
         text,
         editing: false
        };
        return todoItem;
      } else {
        return todo;
      }
    });
    return {...state, todos};
  }),
  on(TodoActions.toggleAllCompleted, (state, { toggle}) => {
    const todos = state.todos.map(todo => {
        const todoItem = {
         ...todo,
         completed : toggle
        };
        return todoItem;
    });
    return {...state, todos};
  })
);

export function reducer(state: ITodosState | undefined, action: Action) {
  return todosReducer(state, action);
}
