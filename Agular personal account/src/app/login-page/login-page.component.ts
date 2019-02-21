import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {MatSnackBar} from '@angular/material';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import {TranslateService} from '@ngx-translate/core';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  public authForm: FormGroup;

  public isLoading: boolean = false;

  constructor(private translate: TranslateService, private snackBar: MatSnackBar, private auth: AuthService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.authForm = new FormGroup({
      username: new FormControl(null,
        Validators.required
      ),
      password: new FormControl(null,
        Validators.required
      )
    });
  }

  logInHandler() {
    const fillInFieldsMessageTranslation = this.translate.get('Fill in all the fields snack bar message');
    const closeMessageTranslation = this.translate.get('Close button snack bar');

    if (this.authForm.valid) {
      const incorrectLogInDataMessageTranslation = this.translate.get('The username or password you entered is incorrect snack bar message');
      const logInMessageTranslation = this.translate.get('You are logged in message snack bar');
      this.isLoading = true;
      const username = this.authForm.controls.username.value;
      const password = this.authForm.controls.password.value;
      this.auth.authUser(username, password).subscribe((user: User) => {
        this.isLoading = false;
        console.log('isLoading');
        console.log(this.isLoading);
        if (user) {
          this.auth.logIn();
          this.userService.saveUserDataInMemory(user);
          this.router.navigate(['/user-page/user-info']);
          forkJoin([logInMessageTranslation, closeMessageTranslation]).subscribe(results => {
            const message = results[0];
            const close = results[1];
            this.snackBar.open(message, close, {duration: 4000});
          });
        } else {
          forkJoin([incorrectLogInDataMessageTranslation, closeMessageTranslation]).subscribe(results => {
            const message = results[0];
            const close = results[1];
            this.snackBar.open(message, close, {duration: 4000});
          });
          this.authForm.reset();
        }
      });
    } else {
      forkJoin([fillInFieldsMessageTranslation, closeMessageTranslation]).subscribe(results => {
        const message = results[0];
        const close = results[1];
        this.snackBar.open(message, close, {duration: 4000});
      });
    }
  }
}
