import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterState} from '../state/counter.state';
import {changeName, customIncrement} from '../state/counter.action';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-custom-counter-output',
  templateUrl: './custom-counter-output.component.html',
  styleUrls: ['./custom-counter-output.component.css']
})
export class CustomCounterOutputComponent implements OnInit {
  value: number;
  name: string;
  name$: Observable<{name: string}>;
  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    this.name$ = this.store.select('counter');
  }

  onAdd() {
    console.log(this.value);
    this.store.dispatch(customIncrement({value: this.value}));
  }

  modifyName() {
    this.store.dispatch(changeName());
  }
}
