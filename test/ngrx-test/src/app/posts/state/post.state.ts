import {Post} from '../post.model';

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [
    {id: 1, title: 'Post 1', description: 'Description of post 1'},
    {id: 2, title: 'Post 2', description: 'Description of post 2'}
  ]
}


