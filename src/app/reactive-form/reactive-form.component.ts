import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}
  public name = new FormControl('');
  // form group
  public profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  // public updateName() {
  //   this.name.setValue('Nancy');
  // }
  public onSubmit() {
    console.log(this.profileForm.value);
  }
  ngOnInit(): void {}
}
