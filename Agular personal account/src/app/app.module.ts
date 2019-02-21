import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTabsModule
} from '@angular/material';

import {MatInputModule} from '@angular/material/input';

import {HttpClientModule, HttpClient} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {UserPageComponent} from './user-page/user-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {UpdateInfoComponent} from './update-info/update-info.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth-guard.service';
import {UserService} from './services/user.service';
import {CreateNewPasswordComponent} from './create-new-password/create-new-password.component';
import {UpdatePasswordGuard} from './guards/update-password-guard.service';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ForgotPasswordComponent,
    UserInfoComponent,
    UserPageComponent,
    NotFoundComponent,
    UpdateInfoComponent,
    CreateNewPasswordComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [AuthService, AuthGuard, UserService, UpdatePasswordGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

