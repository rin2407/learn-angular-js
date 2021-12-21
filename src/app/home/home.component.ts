import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name: string = 'Nguyen Van A';
  public age;
  public listName: any = ['Nguyen Van B', 'Nguyen Van D', 'Nguyen Van F'];
  constructor(private common: CommonService) {
    this.age = common.age;
  }

  public increaseAge() {
    this.common.age++;
    this.age = this.common.age;
  }

  ngOnInit(): void {
    this.name = 'Nguyen van B';
  }
}
