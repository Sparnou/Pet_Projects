import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import birthdayValidator from '../validators/birthdayValidator';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {forkJoin} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  private restoreForm: FormGroup;
  public isLoading: boolean = false;
  constructor(private translate: TranslateService, private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.restoreForm = new FormGroup({
      username: new FormControl(null,
        Validators.required
      ),
      dateOfBirth: new FormControl(null, [
        Validators.required,
        birthdayValidator
      ]),
    });
  }

  RestorePasswordHandler() {
    const checkDataMessageTranslation = this.translate.get('Check is correct data snack bar message');
    const closeMessageTranslation = this.translate.get('Close button snack bar');

    if (this.restoreForm.valid) {
      const userNotFoundMessageTranslation = this.translate.get('User not found snack bar message');
      this.isLoading = true;
      const username = this.restoreForm.value.username;
      const birthdayValue = this.restoreForm.value.dateOfBirth;
      this.authService.resetPassword(username, birthdayValue).subscribe((userId) => {
        this.isLoading = false;

        if (userId) {
          this.authService.setPasswordRecoveryUser(userId, true);
          this.router.navigate(['create-new-password']);
        } else {
          forkJoin([userNotFoundMessageTranslation, closeMessageTranslation]).subscribe(results => {
            const message = results[0];
            const close = results[1];
            this.snackBar.open(message, close, {duration: 4000});
          });
        }
      });
    } else {

      forkJoin([checkDataMessageTranslation, closeMessageTranslation]).subscribe(results => {
        const message = results[0];
        const close = results[1];
        this.snackBar.open(message, close, {duration: 4000});
      });
    }
  }
}
