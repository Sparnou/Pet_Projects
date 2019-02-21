import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import passwordValidator from '../validators/passwordValidator';
import {TranslateService} from '@ngx-translate/core';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss']
})
export class CreateNewPasswordComponent implements OnInit {
  private createPasswordForm: FormGroup;
  public isLoading = false;

  constructor(private translate: TranslateService, private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.createPasswordForm = new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        passwordValidator
      ])
    });
  }

  savePasswordHandler() {
    const checkDataMessageTranslation  = this.translate.get('Check is correct data snack bar message');
    const closeMessageTranslation = this.translate.get('Close button snack bar');

    if (this.createPasswordForm.valid) {
      const passwordChangedMessageTranslation = this.translate.get('Password successfully changed snack bar message');
      this.isLoading = true;
      const newPasswordValue = this.createPasswordForm.value.password;
      this.authService.updatePassword(newPasswordValue).subscribe(() => {
        this.isLoading = false;
        this.authService.setPasswordRecoveryUser(null, false);

        forkJoin([passwordChangedMessageTranslation, closeMessageTranslation]).subscribe(results => {
          const message = results[0];
          const close = results[1];
          this.snackBar.open(message, close, {duration: 4000});
        });

        this.router.navigate(['/']);
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


