import {CounterState} from './counter/state/counter.state';
import {PostsState} from './posts/state/post.state';
import {counterReducer} from './counter/state/counter.reducer';
import {postReducer} from './posts/state/post.reducer';

export interface AppState {
  counter: CounterState;
  posts: PostsState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postReducer
}
