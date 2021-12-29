import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateCustom } from '../validation/validation';
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  profileForm: FormGroup | any;
  ngOnInit(): void {
    this.profileForm = this.formBuilder.group(
      {
        passWord: ['', [Validators.required]],
        confirmPassword: [''],
        name: ['abc'],
      },
      // { validator: this.checkPasswords }
      { validators: [ValidateCustom.notSame] }
    );
  }
  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    let pass = group.controls.passWord.value;
    let confirmPass = group.controls.confirmPassword.value;

    return confirmPass && pass === confirmPass ? null : { notSame: true };
  }
  get passWord() {
    const password = this.profileForm.get('passWord');
    this.profileForm.get('passWord').setValue(password?.value?.trim());
    return password;
  }
  get confirmPassword() {
    const confirmPassword = this.profileForm.get('confirmPassword');
    this.profileForm
      .get('confirmPassword')
      .setValue(confirmPassword?.value?.trim());
    return confirmPassword;
  }
  get name() {
    return this.profileForm.get('name');
  }

  public onSubmit() {
    console.log(this.profileForm.value);
  }
}
