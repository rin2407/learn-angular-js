import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name: string = 'Nguyen Van A';
  public age: number = 10;
  public listName: any = ['Nguyen Van B', 'Nguyen Van D', 'Nguyen Van F'];
  public increaseAge() {
    this.age = this.age + 1;
  }
  constructor() {}

  ngOnInit(): void {
    this.name = 'Nguyen van B';
  }
}
