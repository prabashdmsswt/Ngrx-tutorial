import {createReducer, on} from '@ngrx/store';
import {initialState} from './counter.state';
import {changeName, customIncrement, decrement, increment, reset} from './counter.action';

const _counterReducer = createReducer(
  initialState,
  on(increment, state => {
  return {
    ...state,
    counter: state.counter + 1,
  };
  }), on(decrement, state => {
    return{
      ...state,
      counter: state.counter - 1,
    };
  }), on(reset, state => {
    return{
      ...state,
      counter: 0,
    };
  }), on(customIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }), on(changeName, state => {
    return {
      ...state,
      name: 'Prabash Dahanayake',
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
