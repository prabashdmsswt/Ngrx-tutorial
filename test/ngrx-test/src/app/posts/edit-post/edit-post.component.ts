import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {getPostById} from '../state/post.selector';
import {Observable, Subscription} from 'rxjs';
import {Post} from '../post.model';
import {editPost} from '../state/post.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  editPostForm: FormGroup;
  subscription: Subscription;
  private post: Post;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private route: ActivatedRoute,
              private router: Router) {
    this.editPostForm = formBuilder.group({
      // id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      const id = params.id;
      this.subscription = this.store.select(getPostById, {id}).subscribe( data => {
        this.post = data;
        this.editPostForm.controls.title.setValue(data.title);
        this.editPostForm.controls.description.setValue(data.description);
      });
    }, error => {
      console.log(error);
    });
  }

  editPost() {
    const post = {
      id: this.post.id,
      title: this.editPostForm.value.title,
      description: this.editPostForm.value.description
    };
    this.store.dispatch(editPost({post}));
    this.router.navigate(['posts']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
