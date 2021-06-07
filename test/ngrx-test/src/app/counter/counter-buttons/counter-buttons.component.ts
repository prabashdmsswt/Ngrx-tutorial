import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from '../state/counter.action';
import {AppState} from '../../app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
  // @Output() increment = new EventEmitter();
  // @Output() decrement = new EventEmitter();
  // @Output() reset = new EventEmitter();
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onIncrement() {
    // this.increment.emit();
    this.store.dispatch(increment());
  }

  onDecrement() {
    // this.decrement.emit();
    this.store.dispatch(decrement());
  }

  onReset() {
    // this.reset.emit();
    this.store.dispatch(reset());
  }
}
