import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public name = '';
  public password = '';
  constructor() {}
  public onSubmit() {
    console.log(this.name, this.password);
  }
  public onChange(event: any) {
    console.log(event.target.value);
  }
  ngOnInit(): void {}
}
