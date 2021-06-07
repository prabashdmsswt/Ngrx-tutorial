import {createAction, props} from '@ngrx/store';
import {Post} from '../post.model';

export const ADD_POST = '[post page] add post'
export const EDIT_POST = '[post page] edit post'
export const DELETE_POST = '[post page] delete post'

export const addPost = createAction(ADD_POST, props<{post: Post}>());
export const editPost = createAction(EDIT_POST, props<{post: Post}>());
export const deletePost = createAction(DELETE_POST, props<{id: number}>());
