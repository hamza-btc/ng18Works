import { computed, effect, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = new BehaviorSubject<number>(0);

  // count = signal<number>(0);
  // dblCount = computed(() => this.count() * 2);
  // constructor() {
  //   effect(() => {
  //     console.log('one of the signals is exeucted', this.count());
  //     localStorage.setItem('count', JSON.stringify(this.count()));
  //   });
  // }
  getCount() {
    return this.count.asObservable();
  }

  increment() {
    console.log('clickk me');
    this.count.next(this.count.value + 1);
  }

  dececrement() {
    this.count.next(this.count.value - 1);
  }

  reset() {
    this.count.next(0);
  }
}
