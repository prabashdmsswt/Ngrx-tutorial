import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterState} from '../state/counter.state';
import {changeName, customIncrement} from '../state/counter.action';
import {Observable} from 'rxjs';
import {getName} from '../state/counter.selector';
import {AppState} from '../../app.state';

@Component({
  selector: 'app-custom-counter-output',
  templateUrl: './custom-counter-output.component.html',
  styleUrls: ['./custom-counter-output.component.css']
})
export class CustomCounterOutputComponent implements OnInit {
  value: number;
  name: string;
  name$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.name$ = this.store.select(getName);
  }

  onAdd() {
    if (this.value > 0) {
      this.store.dispatch(customIncrement({value: this.value}));
    }
  }

  modifyName() {
    this.store.dispatch(changeName());
  }
}
