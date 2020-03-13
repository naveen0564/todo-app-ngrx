import { createAction, props } from '@ngrx/store';
import { ITodo } from '../interfaces';

export const addTodo = createAction('[Todos] Add Todo', props<{todo: ITodo}>());

export const removeTodo = createAction('[Todos] Remove Todo', props<{id: number}>());

export const updateTodo = createAction('[Todos] Update Todo', props<{id: number, text: string}>());

export const toggleCompleted = createAction('[Todos] Toggle Completed', props<{id: number; completed: boolean; }>());

export const toggleAllCompleted = createAction('[Todos] Toggle All Completed', props<{toggle: boolean}>());

export const editTodo = createAction('[Todos] Edit Todo', props<{id: number; editing: boolean; }>());

export const clearCompleted = createAction('[Todos] Clear Completed', props<{}>());
