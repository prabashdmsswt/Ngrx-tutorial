import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../post.model';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {getPosts} from '../state/post.selector';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {deletePost} from '../state/post.action';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts$: Observable <Post[]>;

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
   this.posts$ =  this.store.select(getPosts);
  }

  onDelete(id) {
    console.log(id);
    if (confirm('Are you sure?')) {
      this.store.dispatch(deletePost({id}));
    }
  }
}
