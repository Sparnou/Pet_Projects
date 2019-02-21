import {AbstractControl} from '@angular/forms';
import * as moment from 'moment';

export default (control: AbstractControl): { [key: string]: any } | null => {
  const fieldValue = control.value;

  if (fieldValue) {

    const isValueValid = moment(fieldValue, ['YYYY/MM/DD', 'DD MMMM YYYY', 'DD-MMM-YY'], true).isValid();

    if (!isValueValid) {
      return {
        'invalidDateValue': true
      };
    }

    if (moment(fieldValue).isAfter(moment())) {
      return {
        'futureDate': true
      };
    }

    return null;
  }
};
