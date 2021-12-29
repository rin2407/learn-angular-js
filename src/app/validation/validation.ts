import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ValidateCustom {
  static notSame(control: AbstractControl): ValidationErrors | null {
    if (control) {
      const password = control?.get('passWord')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { notSame: true };
    }
    return null;
  }
}
