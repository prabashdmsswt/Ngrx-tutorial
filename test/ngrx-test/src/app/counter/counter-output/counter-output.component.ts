import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterState} from '../state/counter.state';
import {Observable, Subscription} from 'rxjs';
import {getCounter} from '../state/counter.selector';
import {AppState} from '../../app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  // @Input() counter;
  counter: number;
  // counterSubscription: Subscription;
  counter$: Observable<number>;
  // constructor(private store: Store<{counter: {counter: number}}>) { }
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.counterSubscription = this.store.select('counter').subscribe( data => {
    //   this.counter = data.counter;
    // });
    this.counter$ = this.store.select(getCounter);
  }

  ngOnDestroy(): void { // not necessary
    // if (this.counterSubscription) {
    //   this.counterSubscription.unsubscribe();
    // }
  }

}
