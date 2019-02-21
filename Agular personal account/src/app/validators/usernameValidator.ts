import {AbstractControl, ValidationErrors} from '@angular/forms';

export default function (control: AbstractControl): Promise<ValidationErrors | null> {
    const pattern = /^[A-z](?:[a-z]+)?(?: [A-z](?:[a-z]+)?)?$/;

    return new Promise((resolve) => {
      setTimeout(() => {

        if (!pattern.test(control.value)) {
          resolve({
            'incorrectName': true
          });
        } else {
          resolve(null);
        }
      }, 3000);
    });
}



