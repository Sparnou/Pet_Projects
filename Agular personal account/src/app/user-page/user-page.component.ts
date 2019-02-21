import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import {TranslateService} from '@ngx-translate/core';
import {forkJoin} from 'rxjs';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  public isLoading = false;

  constructor(private translate: TranslateService, private userService: UserService, private snackBar: MatSnackBar, private auth: AuthService, private router: Router) {}

  logOut() {
    const loggedOutMessageTranslation = this.translate.get('You are logged out message snack bar');
    const closeMessageTranslation = this.translate.get('Close button snack bar');
    this.auth.logOut();
    this.router.navigate(['/']);

    forkJoin([loggedOutMessageTranslation, closeMessageTranslation]).subscribe(results => {
      const message = results[0];
      const close = results[1];
      this.snackBar.open(message, close, {duration: 4000});
    });
  }

  tabClickHandler(path) {
    this.isLoading = true;
    this.userService.getUserDataFromServer().subscribe((user: User) => {
      this.isLoading = false;
      this.userService.saveUserDataInMemory(user);
      this.router.navigate([`user-page/${path}`]);
    });
  }
}
