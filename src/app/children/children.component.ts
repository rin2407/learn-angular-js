import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent implements OnInit {
  constructor() {}
  @Input() count: any;

  ngOnInit(): void {}
}
