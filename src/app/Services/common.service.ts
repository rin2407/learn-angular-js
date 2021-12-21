import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
  public age: number = 10;
  public increaseAge() {
    this.age = this.age + 1;
  }
}
