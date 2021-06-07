import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {addPost} from '../state/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addPost: FormGroup;
  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {
    this.addPost = formBuilder.group({
      // id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  addNewPost() {
    const post = this.addPost.value;
    this.store.dispatch(addPost({post}));
  }
}
