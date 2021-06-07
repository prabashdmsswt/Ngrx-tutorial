import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Router, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CounterComponent} from './counter/counter/counter.component';
import {HomeComponent} from './home/home.component';
import {PostsListComponent} from './posts/posts-list/posts-list.component';
import {AddPostComponent} from './posts/add-post/add-post.component';
import {EditPostComponent} from './posts/edit-post/edit-post.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'counter', component: CounterComponent
  },
  {
    path: 'posts', component: PostsListComponent, children: [
      {
      path: 'addPost', component: AddPostComponent
      },
      {
        path: 'edit/:id', component: EditPostComponent
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule {

}
