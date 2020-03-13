import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as todosState from './todos.reducer';

export const todosSelector = createFeatureSelector<todosState.ITodosState>(
  'todos'
);

export const allTodos = createSelector(
  todosSelector,
  (state: todosState.ITodosState) => state.todos
);

export const todosLength = createSelector(
  todosSelector,
  (state: todosState.ITodosState) => state.todos.length
);

export const todosRemainingCount = createSelector(
  todosSelector,
  (state: todosState.ITodosState) =>
    state.todos.filter(ele => ele.completed === false).length
);

export const todosFilter = createSelector(
  todosSelector,
  (state: todosState.ITodosState, props) => {
    if (props.filterText === 'Active') {
      return state.todos.filter(ele => ele.completed === false);
    } else if (props.filterText === 'Completed') {
      return state.todos.filter(ele => ele.completed === true);
    } else {
      return state.todos;
    }
  }
);
