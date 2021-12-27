import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
  public age: number = 10;
  public totalPost: any = 0;
  public totalPost$ = new BehaviorSubject<any>(0);
  public increaseAge() {
    this.age = this.age + 1;
  }
  public setTotal(total: any) {
    this.totalPost = total;
    this.totalPost$.next(total);
  }
}
