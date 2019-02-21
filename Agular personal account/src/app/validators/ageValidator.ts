import {AbstractControl} from '@angular/forms';

export default (control: AbstractControl): { [key: string]: boolean } | null => {
  const minAgeValue = 18;
  const maxAgeValue = 65;

  if (control.value) {

    if (
      isNaN(control.value) ||
      control.value % 1 !== 0 ||
      control.value[0] === ' ' ||
      (control.value[0] === '0' && control.value.length > 1)
    ) {
        return {
          'ageFormatError': true
        };
    }

    if (Number(control.value) < minAgeValue || Number(control.value) > maxAgeValue ) {
      return {
              'ageValueError': true
            };
    }
  }

  return null;
}
