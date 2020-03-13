// import { initialState, ITodosState, todosReducer } from './todos.reducer';
// import { ITodo } from './../interfaces';
// import * as TodoActions from './todo.actions';
// import { clone } from '@app/lib/utils';

// describe('Todos Reducer', () => {
//   let state: ITodosState;
//   let todo: ITodo;
//   beforeEach(() => {
//     state = clone(initialState);
//     expect(state).toEqual(initialState);
//     todo = {
//       text: 'Todo 1',
//       completed: false,
//       editing: false,
//       id: 1
//     };
//   });

//   afterEach(() => {
//     state = clone(initialState);
//     expect(state).toEqual(initialState);
//   });

//   describe('Add Todo', () => {
//     it('Should add a new Todo', () => {
//       const newState = todosReducer(state, new TodoActions.AddTodo(todo));
//       expect(newState.todos).toEqual([todo]);
//       expect(newState.todos.length).toBe(1);
//     });
//   });

//   describe('Remove Todo', () => {
//     it('should remove a Todo', () => {
//       let newState: ITodosState;
//       newState = todosReducer(state, new TodoActions.AddTodo(todo));
//       newState = todosReducer(newState, new TodoActions.RemoveTodo(1));
//       expect(newState.todos).toEqual([]);
//     });
//   });

//   describe('Update Todo', () => {
//     it('should update a Todo', () => {
//       let newState: ITodosState;
//       newState = todosReducer(state, new TodoActions.AddTodo(todo));
//       newState = todosReducer(newState, new TodoActions.UpdateTodo(1, 'Todo Updated'));
//       expect(newState.todos[0].text).toEqual('Todo Updated');
//     });
//   });

//   describe('Completed Todo', () => {
//     it('should complete a Todo', () => {
//       let newState: ITodosState;
//       newState = todosReducer(state, new TodoActions.AddTodo(todo));
//       newState = todosReducer(newState, new TodoActions.ToggleCompleted(1, true));
//       expect(newState.todos[0].completed).toBeTrue();
//     });
//   });

//   describe('Incompleted Todo', () => {
//     it('should incomplete a Todo', () => {
//       let newState: ITodosState;
//       newState = todosReducer(state, new TodoActions.AddTodo(todo));
//       newState = todosReducer(newState, new TodoActions.ToggleCompleted(1, false));
//       expect(newState.todos[0].completed).toBeFalse();
//     });
//   });

//   describe('Completed All Todos', () => {
//     it('should complete all Todos', () => {
//       let newState: ITodosState;
//       const todo2 = {
//         text: 'Todo 2',
//         completed: false,
//         editing: false,
//         id: 2
//       };
//       newState = todosReducer(state, new TodoActions.AddTodo(todo));
//       newState = todosReducer(newState, new TodoActions.AddTodo(todo2));
//       newState = todosReducer(newState, new TodoActions.ToggleAllCompleted(true));
//       expect(newState.todos.filter(ele => ele.completed === true).length).toBe(2);
//     });
//   });
// });
