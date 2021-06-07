import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {AUTH_STATE_NAME} from './state/auth.selector';
import {authReducer} from './state/auth.reducer';
import {EffectsModule} from '@ngrx/effects';


const routes: Routes = [
  {
    path: '', redirectTo: 'login',
  },
  {
    path: 'login', component: LoginComponent
  }
  ]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(AUTH_STATE_NAME, authReducer),
    EffectsModule.forFeature()
  ]
})
export class AuthModule { }
