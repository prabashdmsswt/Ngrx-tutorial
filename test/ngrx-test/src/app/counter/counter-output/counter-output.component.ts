import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterState} from '../state/counter.state';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  // @Input() counter;
  counter: number;
  // counterSubscription: Subscription;
  counter$: Observable<{counter: number}>;
  // constructor(private store: Store<{counter: {counter: number}}>) { }
  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    // this.counterSubscription = this.store.select('counter').subscribe( data => {
    //   this.counter = data.counter;
    // });
    this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void { // not necessary
    // if (this.counterSubscription) {
    //   this.counterSubscription.unsubscribe();
    // }
  }

}
