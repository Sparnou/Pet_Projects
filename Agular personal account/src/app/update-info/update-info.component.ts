import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import usernameValidator from '../validators/usernameValidator';
import ageValidator from '../validators/ageValidator';
import birthdayValidator from '../validators/birthdayValidator';
import loginDateValidator from '../validators/loginDateValidator';
import notificationDateValidator from '../validators/notificationDateValidator';
import passwordValidator from '../validators/passwordValidator';
import capitalizeUsername from '../helpers/capitalizeUsername';
import * as moment from 'moment';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.scss']
})
export class UpdateInfoComponent implements OnInit {
  public isLoading = false;

  private updateForm: FormGroup;

  constructor(private translate: TranslateService, private userService: UserService, private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {

    this.updateForm = new FormGroup({
      username: new FormControl(null,null, [usernameValidator]
      ),
      age: new FormControl(null, [
        ageValidator
      ]),
      dateOfBirth: new FormControl(null, [
        birthdayValidator
      ]),
      dateOfFirstLogin: new FormControl(null, [
        loginDateValidator
      ]),
      dateOfNextNotification: new FormControl(null, [
        notificationDateValidator
      ]),
      password: new FormControl(null, [
        passwordValidator
      ]),
    });
  }

  updateInfoHandler() {
    const checkDataMessageTranslation = this.translate.get('Check is correct data snack bar message');
    const closeMessageTranslation = this.translate.get('Close button snack bar');

    if (this.updateForm.valid) {
      this.isLoading = true;
      const informationUpdatedMessageTranslation = this.translate.get('Information updated successfully message snack bar');
      const formValues = {
        username: this.updateForm.value.username ? capitalizeUsername(this.updateForm.value.username) : '',
        password: this.updateForm.value.password,
        age: this.updateForm.value.age,
        dateOfBirth: this.updateForm.value.dateOfBirth,
        dateOfFirstLogin: this.updateForm.value.dateOfFirstLogin,
        dateOfNextNotification: this.updateForm.value.dateOfNextNotification,
      };

      this.userService.updateUserDataOnServer(formValues).subscribe((user: User) => {
        this.isLoading = false;
        this.userService.saveUserDataInMemory(user);
        this.router.navigate(['/user-page/user-info']);
        forkJoin([informationUpdatedMessageTranslation, closeMessageTranslation]).subscribe(results => {
          const message = results[0];
          const close = results[1];
          this.snackBar.open(message, close, {duration: 4000});
        });
      });
    } else {
      forkJoin([checkDataMessageTranslation, closeMessageTranslation]).subscribe(results => {
        const message = results[0];
        const close = results[1];
        this.snackBar.open(message, close, {duration: 4000});
      });
    }
  }

  dateButify(date) {
    return moment(date).format('DD MMMM YYYY');
  }
}


