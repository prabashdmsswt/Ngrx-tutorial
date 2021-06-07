import {createReducer, on} from '@ngrx/store';
import {initialState} from './post.state';
import {addPost, deletePost, editPost} from './post.action';

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    const post = {...action.post};
    post.id = state.posts.length + 1;
    return {
      ...state,
      posts: [...state.posts, post]
    };
  }),
  on(editPost, (state, action) => {
    const newPosts = state.posts.map((post) => {
      return action.post.id == post.id ? action.post : post;
    });
    return {
      ...state,
      posts: newPosts
    };
  }),
  on(deletePost, (state, action) => {
    const newPosts = state.posts.filter((post) => {
      return post.id !== action.id;
    });
    return{
      ...state,
      posts: newPosts
    };
  })
);

export function postReducer(state, action) {
    return _postReducer(state, action);
}
