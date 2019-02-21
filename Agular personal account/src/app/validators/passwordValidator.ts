import {AbstractControl} from '@angular/forms';

export default (control: AbstractControl): { [key: string]: boolean } | null => {
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const fieldValue = control.value;

  if (fieldValue) {

    if (!pattern.test(fieldValue)) {
      return {
        'incorrectPassword': true
      };
    }
  }

  return null;
}

